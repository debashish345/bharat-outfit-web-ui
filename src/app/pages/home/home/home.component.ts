import { Component, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';
import { HomePageBuilderService } from 'src/app/shared/services/home-page-builder.service';
import { Category } from 'src/app/shared/models/category';
import { Banner } from 'src/app/shared/models/banner';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { Product } from 'src/app/shared/models/product';
import { DeviceService } from 'src/app/shared/services/device.service';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, ProductCardComponent, FooterComponent],
  providers: [HomePageBuilderService, DeviceService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  mobile!: Signal<Boolean>;
  overflow: Signal<string> = computed(() => this.mobile() ? 'scroll' : 'hidden');

  categoryList!: Signal<Category[]>;
  bannerList!: Signal<Banner[]>;
  newProductList!: Signal<Product[]>;

  constructor(
    private homePageBService: HomePageBuilderService,
    private deviceService: DeviceService
    ) {
    this.mobile = this.deviceService.device;
    this.homePageBService.getCategoryList();
    this.categoryList = this.homePageBService.categoryList;
    this.homePageBService.getBannerList();
    this.bannerList = this.homePageBService.bannerList;
    this.homePageBService.getNewProductList();
    this.newProductList = this.homePageBService.newProductList;
  }

}
