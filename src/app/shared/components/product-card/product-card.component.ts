import { Component, Input } from '@angular/core';
import { HomePageBuilderService } from '../../services/home-page-builder.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  providers: [HomePageBuilderService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Product;

  getRating()  {
    return Array(Math.round(this.product.rating)).fill(0);
  }

}
