import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { STATE_NAME, INITIAL_STATE } from './state.model';
import { Send } from './actions';
import { AuthState, SaveProfile } from '../../auth/data-access';
import produce from 'immer';
import { take, tap, timer } from 'rxjs';

@State<Record<never, never>>({
  name: STATE_NAME,
  defaults: INITIAL_STATE,
})
@Injectable()
export class TransactionState {
  constructor(private store: Store) {}

  @Action(Send)
  Send(_: StateContext<Record<never, never>>, { params }: Send) {
    // Assume that the transaction is successful, and fake user entity after the transaction is completed
    return timer(1500).pipe(
      take(1),
      tap(() => {
        const user = this.store.selectSnapshot(AuthState.user);
        const updatedUser = produce(user, (draft) => {
          const myCurrency = draft?.currencies.find(
            (c) => c.currency.code === params.currencyCode
          );
          if (myCurrency) myCurrency.balance -= params.amount;
        });

        if (updatedUser) this.store.dispatch(new SaveProfile(updatedUser));
      })
    );
  }
}
