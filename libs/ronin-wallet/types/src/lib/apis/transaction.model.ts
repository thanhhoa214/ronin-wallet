import { SupportedCurrency } from './currencies.model';

export interface SendRequest {
  receiverAddress: string;
  currencyCode: SupportedCurrency;
  amount: number;
}

export interface SendResponse {
  status: number;
}
