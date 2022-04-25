import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState, Logout } from '../../../auth/data-access';

@Component({
  selector: 'ronin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$ = this.store.select(AuthState.user);

  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
