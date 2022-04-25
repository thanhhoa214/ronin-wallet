import { Currency } from '../entities';

export enum SupportedCurrencyEnum {
  'USD',
  'EUR',
  'YEN',
  'VND',
}
export type SupportedCurrency = keyof typeof SupportedCurrencyEnum;
export type SupportedBasedCurrency = 'USD' | 'VND';

export interface CurrenciesResponse {
  data: Currency[];
}
