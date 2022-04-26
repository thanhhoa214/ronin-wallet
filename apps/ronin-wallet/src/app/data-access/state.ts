import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { STATE_NAME, INITIAL_STATE, StateModel } from './state.model';
import { LoadCurrencies, SelectBasedCurrency } from './actions';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CoreService } from './core.service';

@State<StateModel>({
  name: STATE_NAME,
  defaults: INITIAL_STATE,
})
@Injectable()
export class CoreState implements NgxsOnInit {
  @Selector()
  static currencies({ currencies }: StateModel) {
    return currencies;
  }

  @Selector()
  static basedCurrencyCode({ basedCurrencyCode }: StateModel) {
    return basedCurrencyCode;
  }

  constructor(private coreService: CoreService) {}

  ngxsOnInit({ dispatch }: StateContext<CoreState>) {
    dispatch(new LoadCurrencies());
  }

  @Action(LoadCurrencies, { cancelUncompleted: true })
  LoadCurrencies({ patchState }: StateContext<StateModel>) {
    const errorMessage =
      'Load currencies has been errored. Please try again later';
    return this.coreService.getCurrencies().pipe(
      tap(({ data: currencies }) => {
        if (!currencies) throw new Error(errorMessage);
        patchState({ currencies });
      }),
      catchError(() => {
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  @Action(SelectBasedCurrency)
  SelectBasedCurrency(
    { patchState }: StateContext<StateModel>,
    { currencyCode }: SelectBasedCurrency
  ) {
    patchState({ basedCurrencyCode: currencyCode });
  }
}
