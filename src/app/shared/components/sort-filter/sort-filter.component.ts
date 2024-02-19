import { Component } from '@angular/core';
import { AppUiService } from '../../services/app-ui.service';

@Component({
  selector: 'app-sort-filter',
  standalone: true,
  imports: [],
  templateUrl: './sort-filter.component.html',
  styleUrl: './sort-filter.component.scss'
})
export class SortFilterComponent {

  constructor(readonly appUiService: AppUiService){}
}
