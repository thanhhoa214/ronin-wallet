import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '@ronin-wallet/types';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { user } from '../../../data-access/mock-data';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(params: LoginRequest): Observable<LoginResponse> {
    //   return this.httpClient.post<LoginResponse>(
    //     `${environment.apiUrl}/login`,
    //     params
    //   );

    // TODO: Remove when API is successfully deployed
    return of({ data: user });
  }
}
