import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AllFilterComponent } from 'src/app/shared/components/all-filter/all-filter.component';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { SortFilterComponent } from 'src/app/shared/components/sort-filter/sort-filter.component';
import { AppUiService } from 'src/app/shared/services/app-ui.service';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, RouterLink,ProductCardComponent, SortFilterComponent, AllFilterComponent],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(
    readonly device: DeviceService,
    readonly appUiService: AppUiService
  ) {}

}
