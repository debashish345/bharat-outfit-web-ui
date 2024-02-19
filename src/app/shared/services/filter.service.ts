import { Injectable, Signal } from '@angular/core';
import { FilterApiService } from './api/filter-api.service';
import { Filter } from '../models/filter';
import { FilterState } from 'src/app/state/filter.state';
import { tap } from 'rxjs';

class FilterManagementState {
  filterState: FilterState = new FilterState();
  availableFilterIds: string[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  readonly filterManagementState: FilterManagementState = new FilterManagementState();

  constructor(private filterApiService: FilterApiService) {
    this.filterManagementState.filterState.filter = this.filterApiService.filter;
  }
}
