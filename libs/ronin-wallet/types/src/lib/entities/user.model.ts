import { Currency } from './currency.model';

export interface User {
  walletAddress: string;
  currencies: UserCurrency[];
}

export interface UserCurrency {
  balance: number;
  currency: Currency;
}
