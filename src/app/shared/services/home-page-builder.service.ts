import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class HomePageBuilderService {

  constructor(private http: HttpClient) { }

  categoryList = signal<Category[]>([]);


  public getCategoryList(): void {
    let url = 'https://api.npoint.io/9c14b21ed972dcdf8b99';
    this.http.get<Category[]>(url).subscribe(
      (res: any) => {
        this.categoryList.update(cat => [...cat, ...res.data]);
      },
      (err: any) => console.log(err)
    );
  }

}
