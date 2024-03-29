import { Component, EventEmitter, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../services/device.service';
import { LeftSideNavComponent } from '../left-side-nav/left-side-nav.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LeftSideNavComponent],
  providers: [DeviceService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobile!: Signal<Boolean>;
  toggleLeftSideMenu: EventEmitter<Boolean> = new EventEmitter<Boolean>(false);
  showLeftSideMenu: Signal<Boolean> = toSignal(this.toggleLeftSideMenu, { initialValue: false });

  constructor(
    private deviceService: DeviceService,
    readonly authService: AuthService) {
    this.mobile = this.deviceService.device;
  }

  openLeftSideMenu() {
    this.toggleLeftSideMenu.emit(true);
  }

  closeLeftSideMenuEvent(event: Boolean) {
    this.toggleLeftSideMenu.emit(event);
  }
}
