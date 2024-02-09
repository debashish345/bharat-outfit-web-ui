import { Injectable } from '@angular/core';
import { BannerState } from 'src/app/state/banner.state';
import { CategoryState } from 'src/app/state/category.state';
import { ProductState } from 'src/app/state/product.state';
import { BannerApiService } from './api/banner-api.service';
import { CategoryApiService } from './api/category-api.service';
import { ProductApiService } from './api/product-api.service';

class HomePageBuilderState {
  productState: ProductState = new ProductState();
  categoryState: CategoryState = new CategoryState();
  bannerState: BannerState = new BannerState();
}

@Injectable({
  providedIn: 'root'
})
export class HomePageBuilderService {

  public homePageBuilderState: HomePageBuilderState = new HomePageBuilderState();

  constructor(
    private productApiService: ProductApiService,
    private categoryApiService: CategoryApiService,
    private bannerApiService: BannerApiService,
    ) {
    this.homePageBuilderState.bannerState.banners = this.bannerApiService.homePageBanner;
    this.homePageBuilderState.categoryState.categories = this.categoryApiService.homePageCategoryList;
    this.homePageBuilderState.productState.products = this.productApiService.homePageNewProductList;
  }

}
