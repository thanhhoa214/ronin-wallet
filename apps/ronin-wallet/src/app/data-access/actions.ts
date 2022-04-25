import { SupportedBasedCurrency } from '@ronin-wallet/types';
import { STATE_NAME } from './state.model';

const ACTIONS = {
  LOAD_CURRENCIES: `[${STATE_NAME}] Load currencies`,
  SELECT_BASED_CURRENCY: `[${STATE_NAME}] Select based currency`,
};

export class LoadCurrencies {
  static readonly type = ACTIONS.LOAD_CURRENCIES;
}

export class SelectBasedCurrency {
  static readonly type = ACTIONS.SELECT_BASED_CURRENCY;
  constructor(public currencyCode: SupportedBasedCurrency) {}
}
