import * as express from 'express';
import * as cors from 'cors';
import {
  CurrenciesResponse,
  LoginRequest,
  LoginResponse,
} from '@ronin-wallet/types';
import { currencies, user } from './mock-data';
const app = express();

app.use(cors());

app.post<LoginRequest, LoginResponse>('/login', (_, res) => {
  res.status(200).send({ data: user });
});

app.get<void, CurrenciesResponse>('/currencies', (_, res) => {
  res.send({ data: currencies });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
