import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user/user.service";
import { AdminPanelComponent } from "./../components/admin-panel/admin-panel.component";
import { Injectable } from "@angular/core";

export interface ComponentCanActivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (route.component === AdminPanelComponent) {
      if (!this.authService.isAdmin) {
        this.router.navigate(['/']);
        return false;
      }
    }
    
    return true;
  }
}