import { CommonModule } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { Router, RouterLink, RouterModule, provideRouter } from '@angular/router';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';
import { DeviceService } from 'src/app/shared/services/device.service';
import { HomePageBuilderService } from 'src/app/shared/services/home-page-builder.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule, SliderComponent, ProductCardComponent, FooterComponent],
  providers: [HomePageBuilderService, DeviceService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  mobile!: Signal<Boolean>;
  overflow: Signal<string> = computed(() => this.deviceService.device() ? 'scroll' : 'hidden');

  constructor(
    public homePageBService: HomePageBuilderService,
    readonly deviceService: DeviceService
    ) {
    this.mobile = this.deviceService.device;
  }

}
