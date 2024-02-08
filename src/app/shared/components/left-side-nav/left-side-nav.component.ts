import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss'
})
export class LeftSideNavComponent {

  @Output() toggleLeftSizeMenu = new EventEmitter<Boolean>(false);

  closeLeftSideNavBar() {
    this.toggleLeftSizeMenu.emit(false);
  }

}
