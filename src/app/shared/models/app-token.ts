export class AppToken {
    accessToken: string = '';
    refreshToken: string = '';
    isActive: boolean = false;

    constructor(accessToken: string, refreshToken: string, isActive: boolean) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken
        this.isActive = isActive;
    }
}


