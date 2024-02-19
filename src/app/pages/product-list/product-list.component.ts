import { Component } from '@angular/core';
import { AllFilterComponent } from 'src/app/shared/components/all-filter/all-filter.component';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { SortFilterComponent } from 'src/app/shared/components/sort-filter/sort-filter.component';
import { AppUiService } from 'src/app/shared/services/app-ui.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, SortFilterComponent, AllFilterComponent],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(
    readonly appUiService: AppUiService
  ) {}

}
