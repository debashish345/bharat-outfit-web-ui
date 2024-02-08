import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';
import { HomePageBuilderService } from 'src/app/shared/services/home-page-builder.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  providers: [HomePageBuilderService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categoryList!: Signal<Category[]>;

  constructor(private homePageBService: HomePageBuilderService) {
    this.homePageBService.getCategoryList();
    this.categoryList = this.homePageBService.categoryList;
    console.log(this.categoryList)
  }

}
