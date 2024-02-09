import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  readonly homePageNewProductList: Signal<any> = toSignal<Product[]>(this.getHomePageNewProduct());

  constructor(private http: HttpClient) { }

  private getHomePageNewProduct() {
    let url = 'https://api.npoint.io/da79f96194b6987283ff';

    return this.http.get<Product[]>(url);
  }
}
