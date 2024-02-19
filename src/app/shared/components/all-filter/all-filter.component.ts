import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { FilterService } from '../../services/filter.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppUiService } from '../../services/app-ui.service';

@Component({
  selector: 'app-all-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './all-filter.component.html',
  styleUrl: './all-filter.component.scss'
})
export class AllFilterComponent {

  filterOptions = ['Price', 'Size', 'Color'];
  currentFilterMobile?: string;

  filterForm = this.fb.group({
    color: [],
    size: [],
    price: []
  });
  
  constructor(readonly device: DeviceService, 
    readonly appUiService: AppUiService,
    readonly filterService: FilterService, private fb: FormBuilder){}

  public showFilter(fOption: string): void {
    this.currentFilterMobile = fOption;
  }

}
