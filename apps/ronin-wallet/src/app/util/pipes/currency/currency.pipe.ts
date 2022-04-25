import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngxs/store';
import { SupportedBasedCurrency, SupportedCurrency } from '@ronin-wallet/types';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CoreState } from '../../../data-access';

@Pipe({ name: 'roninCurrency' })
export class RoninCurrencyPipe implements PipeTransform {
  constructor(private store: Store) {}

  transform(
    value: number,
    from: SupportedCurrency,
    to?: SupportedBasedCurrency
  ): Observable<string> {
    const currencies$ = this.store.select(CoreState.currencies);
    const toCurrencyCode$ = to
      ? of(to)
      : this.store.select(CoreState.basedCurrencyCode);
    return combineLatest([currencies$, toCurrencyCode$]).pipe(
      map(([currencies, toCurrencyCode]) => {
        let exchangeRate = 0;
        const fromCurrency = currencies.find(
          (currency) => currency.code === from
        );

        if (fromCurrency)
          exchangeRate = fromCurrency.exchangeRate[to || toCurrencyCode];

        return `${
          formatNumber(value * exchangeRate, 'en-US', '1.0-2') || ''
        } ${toCurrencyCode}`;
      })
    );
  }
}
