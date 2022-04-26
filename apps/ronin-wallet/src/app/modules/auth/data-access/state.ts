import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { STATE_NAME, INITIAL_STATE, StateModel } from './state.model';
import { Login, Logout, SaveProfile } from './actions';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from './auth.service';
import { ConfirmDialogComponent } from '../../../ui/confirm-dialog/confirm-dialog.component';

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
    private router: Router
  ) {}

  @Action(Login, { cancelUncompleted: true })
  Login({ patchState }: StateContext<StateModel>, { params }: Login) {
    const errorMessage = 'Login has been errored. Please try again later';
    return this.authService.login(params).pipe(
      tap(({ data: user }) => {
        if (!user) throw new Error(errorMessage);
        patchState({ user });
      }),
      catchError(() => {
        return throwError(() => new Error(errorMessage));
      })
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
          title: 'Sign out the account?',
          message: `All thinsgs saved, sign out current account?`,
        },
        nzWidth: '336px',
        nzOkDanger: true,
        nzCancelText: 'Cancel',
        nzOkText: 'Sign out',
        nzOnOk: successCallback,
      });
    return successCallback();
  }

  @Action(SaveProfile)
  SaveProfile({ patchState }: StateContext<StateModel>, { user }: SaveProfile) {
    patchState({ user });
  }
}
