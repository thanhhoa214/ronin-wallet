import { Component, Input } from '@angular/core';
import { take, timer } from 'rxjs';

@Component({
  selector: 'ronin-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent {
  @Input() address = '';
  @Input() balance = 0; // in USD

  isCopied = false;

  onCopy() {
    this.isCopied = true;

    timer(1000)
      .pipe(take(1))
      .subscribe(() => {
        this.isCopied = false;
      });
  }
}
