import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AppToken } from '../../models/app-token';
import { ApiResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private readonly GOOGLE_TOKEN_ENDPOINT = 'http://localhost:8080/login/oauth2/code/google';

  constructor(private http: HttpClient) { }

  getOauth2Token(code:string, state: string): Observable<ApiResponse<AppToken>> {
    return this.http.get<ApiResponse<AppToken>>(`${this.GOOGLE_TOKEN_ENDPOINT}?code=${code}&state=${state}`);
  }
}
