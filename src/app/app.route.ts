import { Route } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductDisplayComponent } from "./shared/components/product-display/product-display.component";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'product', component: ProductListComponent
    },
    {
        path: 'product/:id', component: ProductDisplayComponent
    }
]