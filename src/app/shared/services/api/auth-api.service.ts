import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AppToken } from '../../models/app-token';
import { ApiResponse } from '../../models/api-response';
import { AppConstant } from 'src/app/utils/app-constant';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  getOauth2Token(code:string, state: string): Observable<ApiResponse<AppToken>> {
    return this.http.get<ApiResponse<AppToken>>(`${AppConstant.GOOGLE_TOKEN_ENDPOINT}?code=${code}&state=${state}`);
  }
}
