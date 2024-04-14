import { Signal, WritableSignal, computed, signal } from "@angular/core";
import { AppToken } from "../shared/models/app-token";
import { User } from "../shared/models/user";
import { LocalStorageUtil } from "../utils/localstorage-util";
import { AppConstant } from "../utils/app-constant";

export class AuthState {
    
    user: Signal<User> = signal<User>({});
    appToken: WritableSignal<AppToken> = signal<AppToken>(new AppToken('', '', false));
    isLoggedIn: Signal<boolean> = computed(() => {
        return !!LocalStorageUtil.getItem<AppToken>(AppConstant.AUTHORIZATION_TOKEN) && LocalStorageUtil.getItem<AppToken>(AppConstant.AUTHORIZATION_TOKEN).accessToken.length > 0;
      });
  
}