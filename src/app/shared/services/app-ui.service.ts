import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { DeviceService } from './device.service';

@Injectable({
  providedIn: 'root'
})
export class AppUiService {

  private device: Signal<Boolean> = this.deviceService.device;

  readonly sortFilterSignal: WritableSignal<Boolean> = signal<Boolean>(false);
  readonly allFilterSignal: WritableSignal<Boolean> = signal<Boolean>(false);

  constructor(
    private deviceService: DeviceService
  ) { }

  public toggleSortFilterSignal(): void {
    this.sortFilterSignal.update(val => !val);
  }

  public toggleAllFilterSignal(): void {
    this.allFilterSignal.update(val => !val);
  }
}
