import { Contact } from "./contact";
import { AppToken } from "./app-token";
import { Role } from "./role";

export interface User {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    contact?: Contact;
    appToken?: AppToken;
    roleIds?: Role[];

}