import { Component, Signal, signal } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { ProfileDialogComponent } from '../../dialogs/profile-dialog/profile-dialog.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ProfileDialogComponent, RouterOutlet, RouterLink, CommonModule],
  providers: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  readonly isDialogActive= signal<Boolean>(false);

  constructor(readonly device: DeviceService) {}

  public openDialog() : void {
    this.isDialogActive.update(val => true);
  }

  public closeDialog() : void {
    this.isDialogActive.update(val => false);
  }
}
