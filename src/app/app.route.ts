import { Route } from "@angular/router";
import { HomeComponent } from "./pages/home/home/home.component";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: HomeComponent
    }
]