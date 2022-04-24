import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../../data-access';

@Injectable({ providedIn: 'root' })
export class IsLoggedInGuard implements CanActivate {
  constructor(private router: Router, private _store: Store) {}

  canActivate() {
    const isLoggedIn = this._store.selectSnapshot(AuthState.isLoggedIn);
    console.warn(isLoggedIn);

    if (isLoggedIn) return true;
    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
