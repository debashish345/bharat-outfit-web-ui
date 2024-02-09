import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Category } from '../../models/category';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  readonly homePageCategoryList: Signal<any> = toSignal<Category[]>(this.getHomePageNewCategory());

  constructor(private http: HttpClient) { }

  private getHomePageNewCategory() {
    let url = 'https://api.npoint.io/dc71d0c32656cf62d603';

    return this.http.get<Category[]>(url);
  }
}
