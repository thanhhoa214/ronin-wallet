import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '@ronin-wallet/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(params: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      'https://localhost:3333/api/login',
      params
    );
  }

  logout() {
    localStorage.clear();
  }
}