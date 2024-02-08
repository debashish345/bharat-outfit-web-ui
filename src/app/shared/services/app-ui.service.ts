import { Injectable, Signal, computed } from '@angular/core';
import { DeviceService } from './device.service';

@Injectable({
  providedIn: 'root'
})
export class AppUiService {

  private device: Signal<Boolean> = this.deviceService.device;

  constructor(
    private deviceService: DeviceService
  ) {
   }
}
