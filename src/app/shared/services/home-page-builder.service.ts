import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Category } from '../models/category';
import { Banner } from '../models/banner';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class HomePageBuilderService {

  constructor(private http: HttpClient) { }

  readonly categoryList = signal<Category[]>([]);
  readonly bannerList = signal<Banner[]>([]);
  readonly newProductList = signal<Product[]>([]);


  public getCategoryList(): void {
    let url = 'https://api.npoint.io/dc71d0c32656cf62d603';
    this.http.get<Category[]>(url).subscribe(
      (res: any) => {
        this.categoryList.update(cat => [...cat, ...res.data]);
      },
      (err: any) => console.log(err)
    );
  }

  public getBannerList(): void {
    let url = 'https://api.npoint.io/7d218d79c255df0ac14d';
    this.http.get<Banner[]>(url).subscribe(
      (res: any) => {
        this.bannerList.update(ban => [...ban, ...res.data]);
      },
      (err: any) => console.log(err)
    );
  }

  public getNewProductList(): void {
    let url = 'https://api.npoint.io/f5200f110c5327a03e42';
    this.http.get<Product[]>(url).subscribe(
      (res: any) => {
        this.newProductList.update(p => [...p, ...res.data]);
      },
      (err: any) => console.log(err)
    );
  }

}
