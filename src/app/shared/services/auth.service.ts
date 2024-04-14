import { Injectable, signal } from '@angular/core';
import { AuthState } from 'src/app/state/auth.state';
import { AuthApiService } from './api/auth-api.service';
import { AppToken } from '../models/app-token';
import { ApiResponse } from '../models/api-response';
import { LocalStorageUtil } from 'src/app/utils/localstorage-util';
import { AppComponent } from 'src/app/app.component';
import { AppConstant } from 'src/app/utils/app-constant';
class UserAuthState {
  userState: AuthState = new AuthState();
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userAuthState: UserAuthState = new UserAuthState();

  constructor(
    private authApiService: AuthApiService) {
  }

  initiateGoogleLogin(): void {
    window.location.href = AppConstant.GOOGLE_AUTHORIZATION_ENDPOINT;
  }

  setOauth2Token(appToken: string): void {
    const appAuthorizationToken = new AppToken(appToken, '', true);
    console.log('appToken', appToken)
    this.userAuthState.userState.appToken?.set(appAuthorizationToken);
    LocalStorageUtil.setItem<AppToken>(AppConstant.AUTHORIZATION_TOKEN, appAuthorizationToken);
  }

}
