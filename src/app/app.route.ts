import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDisplayComponent } from './shared/components/product-display/product-display.component';
import { AccountComponent } from './shared/components/account/account.component';
import { CallbackComponent } from './shared/components/callback/callback.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AppConstant } from './utils/app-constant';
import { RegisterComponent } from './shared/components/register/register.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { AddressComponent } from './shared/components/address/address.component';
import { OrderComponent } from './shared/components/order/order.component';
import { PaymentComponent } from './shared/components/payment/payment.component';
import { loginGuard } from './guards/login.guard';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: {
        label: 'Home',
        info: 'Welcome to our website',
      },
    },
  },
  {
    path: 'callback',
    component: CallbackComponent,
    data: {
      breadcrumb: {
        label: 'Auth',
        info: 'Authentication page',
      },
    },
  },
  {
    path: 'product',
    component: ProductListComponent,
    data: {
      breadcrumb: {
        label: 'Product',
        info: 'List of products',
      },
    },
  },
  {
    path: 'product/:id',
    component: ProductDisplayComponent,
    data: {
      breadcrumb: {
        label: 'Product',
        info: 'Product details',
        params: {
          id: ':id',
        },
      },
    },
  },
  {
    path: 'account',
    component: AccountComponent,
    data: {
      breadcrumb: {
        label: 'Account',
        info: 'User account page',
      },
    },
    canActivateChild: [loginGuard],
    children: [
      {
        path: '',
        component: ProfileComponent,
        data: {
          breadcrumb: {
            label: 'Profile',
            info: 'User profile page',
          },
        },
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          breadcrumb: {
            label: 'Order',
            info: 'User order page',
          },
        },
      },
      {
        path: 'address',
        component: AddressComponent,
        data: {
          breadcrumb: {
            label: 'Address',
            info: 'User address page',
          },
        },
      },
      {
        path: 'payment',
        component: PaymentComponent,
        data: {
          breadcrumb: {
            label: 'Payment',
            info: 'User payment page',
          },
        },
      }
    ]
  },
  {
    path: AppConstant.LOGIN_PATH,
    component: LoginComponent,
    data: {
      breadcrumb: {
        label: 'Login',
        info: 'User login page',
      },
    },
  },
  {
    path: AppConstant.REGISTER_PATH,
    component: RegisterComponent,
    data: {
      breadcrumb: {
        label: 'Register',
        info: 'User registration page',
      },
    },
  },
];
