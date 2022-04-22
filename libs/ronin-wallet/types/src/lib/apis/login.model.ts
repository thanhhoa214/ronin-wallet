import { User } from '../entities';

export interface LoginRequest {
  passphrase: string;
}

export interface LoginResponse {
  data: User;
}
