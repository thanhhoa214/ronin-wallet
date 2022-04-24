import { LoginRequest } from '@ronin-wallet/types';
import { STATE_NAME } from './state.model';

const ACTIONS = {
  LOGIN: `[${STATE_NAME}] Login`,
  LOG_OUT: `[${STATE_NAME}] Log out`,
};

export class Login {
  static readonly type = ACTIONS.LOGIN;
  constructor(public readonly params: LoginRequest) {}
}

export class Logout {
  static readonly type = ACTIONS.LOG_OUT;
  constructor(public readonly willConfirm = true) {}
}
