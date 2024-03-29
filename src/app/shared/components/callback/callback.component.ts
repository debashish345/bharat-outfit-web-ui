import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from '../../services/api/auth-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute) {
    
    this.route.queryParams.subscribe(params => {
      this.authService.setOauth2Token(params['code'], params['state']);
    });
  }

}
