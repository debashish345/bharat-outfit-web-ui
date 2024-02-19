import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Filter } from '../../models/filter';
import { Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FilterApiService {

  readonly filter: Signal<Filter | undefined> = toSignal<Filter>(this.getFilter());

  constructor(private http: HttpClient) { }

  private getFilter(): Observable<Filter> {
    let url = 'https://api.npoint.io/45561c915aaf831064a7';
    return this.http.get<Filter>(url);
  }
}
