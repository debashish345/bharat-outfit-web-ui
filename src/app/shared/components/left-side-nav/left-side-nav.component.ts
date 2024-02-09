import { Component, EventEmitter, Input, Output, Signal, computed, signal } from '@angular/core';
import { HomePageBuilderService } from '../../services/home-page-builder.service';
import { Banner } from '../../models/banner';

@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [],
  providers: [HomePageBuilderService],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss'
})
export class LeftSideNavComponent {

  @Output() toggleLeftSizeMenu = new EventEmitter<Boolean>(false);

  constructor(readonly homePageBService: HomePageBuilderService){
  }

  closeLeftSideNavBar() {
    this.toggleLeftSizeMenu.emit(false);
  }

}
