import { Currency, User } from '@ronin-wallet/types';

export const currencies: Currency[] = [
  {
    code: 'USD',
    exchangeRate: {
      USD: 1,
      VND: 22967.5,
    },
  },
  {
    code: 'EUR',
    exchangeRate: {
      USD: 1.08,
      VND: 24745.07,
    },
  },
  {
    code: 'YEN',
    exchangeRate: {
      USD: 0.0078,
      VND: 178.28,
    },
  },
];

export const user: User = {
  walletAddress: '7300 3777 3888 3334',
  currencies: [
    {
      balance: 1000,
      currency: currencies[0],
    },
    {
      balance: 50,
      currency: currencies[1],
    },
    {
      balance: 10000,
      currency: currencies[2],
    },
  ],
};
