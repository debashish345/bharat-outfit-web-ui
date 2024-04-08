import { Component, OnInit, Signal, signal } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ProfileComponent, RouterOutlet, RouterLink, CommonModule, BreadcrumbComponent],
  providers: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{

  readonly isOptionClicked = signal<Boolean>(false);
  isMobile: boolean = true;

  constructor(
    readonly deviceService: DeviceService,
    private router: Router) {
    this.closeDialog();
  }
  ngOnInit(): void {
  }

  public openDialog() : void {
    this.isOptionClicked.update(val => true);
  }

  public closeDialog() : void {
    this.isOptionClicked.update(val => false);
  }
}
