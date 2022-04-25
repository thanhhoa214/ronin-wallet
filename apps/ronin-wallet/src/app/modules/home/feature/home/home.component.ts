import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter, map } from 'rxjs';
import { AuthState, Logout } from '../../../auth/data-access';

@Component({
  selector: 'ronin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$ = this.store.select(AuthState.user).pipe(filter((u) => !!u));
  balance$ = this.user$.pipe(
    map((user) => {
      const totalBalance = user?.currencies.reduce(
        (total, currency) =>
          total + currency.balance * currency.currency?.exchangeRate.USD,
        0
      );
      return totalBalance;
    })
  );

  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
