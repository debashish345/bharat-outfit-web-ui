import { Route } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductDisplayComponent } from "./shared/components/product-display/product-display.component";
import { AccountComponent } from "./shared/components/account/account.component";
import { ProfileDialogComponent } from "./shared/dialogs/profile-dialog/profile-dialog.component";
import { AddressDialogComponent } from "./shared/dialogs/address-dialog/address-dialog.component";
import { OrderDialogComponent } from "./shared/dialogs/order-dialog/order-dialog.component";
import { PaymentDialogComponent } from "./shared/dialogs/payment-dialog/payment-dialog.component";

export const APP_ROUTE: Route[] = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'product', component: ProductListComponent
    },
    {
        path: 'product/:id', component: ProductDisplayComponent
    },
    {
        path: 'account', component: AccountComponent,
        children: [
            {
                path: 'profile', component: ProfileDialogComponent
            },
            {
                path: 'address', component: AddressDialogComponent
            },
            {
                path: 'order', component: OrderDialogComponent
            },
            {
                path: 'payment', component: PaymentDialogComponent
            }
        ]
    }
]