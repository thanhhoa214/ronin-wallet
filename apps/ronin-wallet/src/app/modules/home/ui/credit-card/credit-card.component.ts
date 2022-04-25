import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ronin-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent {
  @Input() address = '';
  @Input() balance = 0; // in USD
}
