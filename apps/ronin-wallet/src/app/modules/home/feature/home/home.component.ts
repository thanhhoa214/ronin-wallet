import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from '../../../auth/data-access';

@Component({
  selector: 'ronin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
