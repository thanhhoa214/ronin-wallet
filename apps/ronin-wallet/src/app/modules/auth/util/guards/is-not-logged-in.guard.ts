import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../../data-access';

@Injectable({ providedIn: 'root' })
export class IsNotLoggedInGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate() {
    const isLoggedIn = this.store.selectSnapshot(AuthState.isLoggedIn);

    if (isLoggedIn) this.router.navigateByUrl('/');
    return !isLoggedIn;
  }
}
