import { SupportedCurrency } from '../apis';

export interface Currency {
  code: SupportedCurrency;
  exchangeRate: {
    VND: number;
    USD: number;
  };
}
