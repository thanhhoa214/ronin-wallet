import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserCurrency } from '@ronin-wallet/types';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AuthState } from '../../../auth/data-access';

@Component({
  selector: 'ronin-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss'],
})
export class CurrencySelectComponent {
  @Input() selectedCurrencyCode = '';
  user$ = this.store.select(AuthState.user);

  constructor(
    public nzModalRef: NzModalRef<CurrencySelectComponent, UserCurrency>,
    private store: Store
  ) {}
}
