import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '@ronin-wallet/types';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(params: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${environment.apiUrl}/login`,
      params
    );
  }

  logout() {
    localStorage.clear();
  }
}
