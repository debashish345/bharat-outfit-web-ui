import { Component, EventEmitter, Input, Output, Signal, computed, signal } from '@angular/core';
import { HomePageBuilderService } from '../../services/home-page-builder.service';
import { Banner } from '../../models/banner';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [RouterLink],
  providers: [HomePageBuilderService],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss'
})
export class LeftSideNavComponent {

  private readonly GOOGLE_AUTHORIZATION_ENDPOINT = "http://localhost:8080/oauth2/authorization/google"

  googleSigin() {
    window.location.href = this.GOOGLE_AUTHORIZATION_ENDPOINT;
  }

  @Output() toggleLeftSizeMenu = new EventEmitter<Boolean>(false);

  constructor(readonly homePageBService: HomePageBuilderService, 
    private cookieService: CookieService){
  }

  closeLeftSideNavBar() {
    this.toggleLeftSizeMenu.emit(false);
  }

}
