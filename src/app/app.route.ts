import { Route } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'list', component: ProductListComponent
    }
]