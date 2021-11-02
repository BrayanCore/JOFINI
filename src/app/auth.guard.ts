import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionService } from './services/section.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: SectionService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if (this.auth.isLoggedIn()) {
      return true;
    }

    const routeRequired = route.url[0].path;
    this.router.navigate(['/login'], { queryParams: { component: routeRequired } });
    window.alert('No tienes acceso a visualizar la página');
    return false;
  }
  
}
