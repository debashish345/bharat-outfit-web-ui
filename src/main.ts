import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTE } from './app/app.route';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE),
    provideHttpClient()
  ]
})
