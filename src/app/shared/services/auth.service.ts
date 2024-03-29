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

  setOauth2Token(code: string, state: string): void {
    this.authApiService.getOauth2Token(code, state).subscribe(
      (res:ApiResponse<AppToken>) => {
        this.userAuthState.userState.appToken?.set(res.body.data);
        LocalStorageUtil.setItem<AppToken>(AppConstant.ACCESS_TOKEN, res.body.data);
      }
    )
  }

}
