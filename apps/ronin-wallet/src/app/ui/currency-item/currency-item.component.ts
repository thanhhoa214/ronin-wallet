import { Component, Input } from '@angular/core';
import { UserCurrency } from '@ronin-wallet/types';

@Component({
  selector: 'ronin-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
})
export class CurrencyItemComponent {
  @Input() currency?: UserCurrency;
}
