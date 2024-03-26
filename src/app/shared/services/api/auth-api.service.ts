import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  getOauth2Token(tokenEndpoint: string, code:string, state: string): Observable<any> {
    return this.http.get(`${tokenEndpoint}?code=${code}&state=${state}`);
  }
}
