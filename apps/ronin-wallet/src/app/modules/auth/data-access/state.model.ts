import { User } from '@ronin-wallet/types';

export const STATE_NAME = 'Ronin_Auth';
export const INITIAL_STATE: StateModel = {};
export interface StateModel {
  user?: User;
}
