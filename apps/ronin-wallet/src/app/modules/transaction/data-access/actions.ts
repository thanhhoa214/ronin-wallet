import { SendRequest } from '@ronin-wallet/types';
import { STATE_NAME } from './state.model';

const ACTIONS = {
  SEND: `[${STATE_NAME}] Send`,
};

export class Send {
  static readonly type = ACTIONS.SEND;
  constructor(public readonly params: SendRequest) {}
}
