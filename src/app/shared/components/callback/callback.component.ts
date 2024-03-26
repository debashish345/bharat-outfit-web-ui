import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from '../../services/api/auth-api.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  
  private readonly GOOGLE_TOKEN_ENDPOINT = 'http://localhost:8080/login/oauth2/code/google';

  constructor(
    private authApiService: AuthApiService,
    private route: ActivatedRoute) {
    
    this.route.queryParams.subscribe(params => {
      
      this.authApiService.getOauth2Token(this.GOOGLE_TOKEN_ENDPOINT, params['code'], params['state']).subscribe(
        (res:any) => {
          
        }
      )
    })
  }

}
