import { Currency, SupportedBasedCurrency } from '@ronin-wallet/types';

export const STATE_NAME = 'Ronin_Core';
export const INITIAL_STATE: StateModel = {
  currencies: [],
  basedCurrencyCode: 'VND',
};
export interface StateModel {
  currencies: Currency[];
  basedCurrencyCode: SupportedBasedCurrency;
}
