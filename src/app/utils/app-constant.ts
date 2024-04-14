import { environment } from "src/environments/environment.development";

export class AppConstant {

    /* localstorage constant */
    public static readonly AUTHORIZATION_TOKEN = 'authorization_token';

    /* routes constant */
    public static readonly LOGIN_PATH = 'login';
    public static readonly REGISTER_PATH = 'register';

    /* Auth URLs */
    public static readonly GOOGLE_AUTHORIZATION_ENDPOINT = `${environment.baseUrl}/oauth2/authorization/google`;
    
    public static readonly GOOGLE_TOKEN_ENDPOINT = `${environment.baseUrl}/login/oauth2/code/google`;
}