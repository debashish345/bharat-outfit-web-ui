import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss',
})
export class BottomNavComponent {
  selectedOption = 'home';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
