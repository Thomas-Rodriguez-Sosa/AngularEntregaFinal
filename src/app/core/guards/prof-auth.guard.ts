import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/bar/pages/auth/auth.service';
import { map } from 'rxjs';

export const profAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.authProf$.pipe(
    map((authProf) => authProf?.role !== 'Professor'? router.createUrlTree(['bar', 'home']): true))
};
