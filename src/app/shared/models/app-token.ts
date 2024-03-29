export class AppToken {
    accessToken: string = '';
    refreshToken: string = '';
    isActive: boolean = false;

    constructor(accessToken: string, refreshToken: string, isActive: boolean) {}
}


