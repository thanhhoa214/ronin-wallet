import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { STATE_NAME, INITIAL_STATE, StateModel } from './state.model';
import { Login, Logout } from './actions';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from './auth.service';
import { ConfirmDialogComponent } from '../../../ui/confirm-dialog/confirm-dialog.component';
import { CONFIRM_DIALOG_MODAL_CONFIG } from '../../../ui/confirm-dialog/confirm-dialog.config';

@State<StateModel>({
  name: STATE_NAME,
  defaults: INITIAL_STATE,
})
@Injectable()
export class AuthState {
  @Selector()
  static user({ user }: StateModel) {
    return user;
  }

  @Selector()
  static isLoggedIn({ user }: StateModel) {
    return !!user;
  }

  constructor(
    private authService: AuthService,
    private nzModalService: NzModalService,
    private router: Router,
    private store: Store
  ) {}

  @Action(Login, { cancelUncompleted: true })
  Login({ patchState }: StateContext<StateModel>, { params }: Login) {
    return this.authService.login(params).pipe(
      tap(({ data: user }) => {
        if (!user)
          throw new Error('Login has been errored. Please try again later');
        patchState({ user });
      }),
      catchError(() =>
        throwError(
          () => new Error('Đăng nhập thất bại, thông tin xác thực chưa đúng!')
        )
      )
    );
  }

  @Action(Logout, { cancelUncompleted: true })
  Logout({ setState }: StateContext<StateModel>, { willConfirm }: Logout) {
    const successCallback = () => {
      setState(INITIAL_STATE);
      localStorage.clear();
      this.router.navigateByUrl('/auth/login');
    };
    if (willConfirm)
      return this.nzModalService.create({
        nzContent: ConfirmDialogComponent,
        nzComponentParams: {
          title: 'Đăng xuất',
          message: `Bạn có chắc chắn muốn đăng xuất?`,
        },
        ...CONFIRM_DIALOG_MODAL_CONFIG,
        nzOkText: 'Đăng xuất',
        nzOnOk: successCallback,
      });
    return successCallback();
  }
}