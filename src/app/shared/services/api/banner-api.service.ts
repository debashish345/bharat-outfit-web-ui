import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Banner } from '../../models/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerApiService {

  readonly homePageBanner: Signal<any> = toSignal<Banner[]>(this.getHomePageBanner());

  constructor(private http: HttpClient) { }

  private getHomePageBanner(): Observable<Banner[]> {
    let url = 'https://api.npoint.io/989117d09afcee9b6b1e';

    return this.http.get<Banner[]>(url);
  }
}
