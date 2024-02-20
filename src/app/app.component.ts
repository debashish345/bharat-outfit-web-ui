import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceService } from './shared/services/device.service';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    DeviceService
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-ui';

  size!: Signal<Boolean>;

  constructor(readonly deviceService: DeviceService){
    this.size = this.deviceService.device;
  }
}
