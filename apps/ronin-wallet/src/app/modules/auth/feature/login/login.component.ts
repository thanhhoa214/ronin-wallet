import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError, EMPTY, takeUntil } from 'rxjs';
import { DestroyService } from '../../../../util/services/destroy.service';
import { Login } from '../../data-access';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DestroyService],
})
export class LoginComponent {
  passwordControl = new FormControl('');

  isPasswordVisible = false;
  isLoggingIn = false;

  constructor(
    private messageService: NzMessageService,
    private destroy$: DestroyService,
    private store: Store,
    private router: Router
  ) {}

  onSubmit() {
    this.passwordControl.markAsDirty();
    this.passwordControl.updateValueAndValidity();
    if (!this.passwordControl.valid) return;

    const passphrase: string = this.passwordControl.value;
    this.isLoggingIn = true;
    this.store
      .dispatch(new Login({ passphrase }))
      .pipe(
        takeUntil(this.destroy$),
        catchError((error: Error) => {
          this.isLoggingIn = false;
          this.messageService.error(error.message);
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
