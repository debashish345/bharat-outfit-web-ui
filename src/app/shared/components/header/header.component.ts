import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [DeviceService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobile!: Signal<Boolean>;

  constructor(private deviceService: DeviceService) {
    this.mobile = this.deviceService.device;
  }
}
