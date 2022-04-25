import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrenciesResponse } from '@ronin-wallet/types';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { currencies } from './mock-data';

@Injectable({ providedIn: 'root' })
export class CoreService {
  constructor(private httpClient: HttpClient) {}

  getCurrencies(): Observable<CurrenciesResponse> {
    // return this.httpClient.get<CurrenciesResponse>(
    //   `${environment.apiUrl}/currencies`
    // );

    // TODO: Remove when API is successfully deployed
    return of({ data: currencies });
  }
}
