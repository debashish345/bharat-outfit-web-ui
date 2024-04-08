import { Inject, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

export const loginGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.userAuthState.userState.isLoggedIn()){
    return true;
  }
  router.navigateByUrl('/login');

  return true;
};
