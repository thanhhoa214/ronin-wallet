import { LoginRequest, User } from '@ronin-wallet/types';
import { STATE_NAME } from './state.model';

const ACTIONS = {
  LOGIN: `[${STATE_NAME}] Login`,
  SAVE_PROFILE: `[${STATE_NAME}] Save Profile`,
  LOG_OUT: `[${STATE_NAME}] Log out`,
};

export class Login {
  static readonly type = ACTIONS.LOGIN;
  constructor(public readonly params: LoginRequest) {}
}

export class SaveProfile {
  static readonly type = ACTIONS.SAVE_PROFILE;
  constructor(public readonly user: User) {}
}

export class Logout {
  static readonly type = ACTIONS.LOG_OUT;
  constructor(public readonly willConfirm = true) {}
}
