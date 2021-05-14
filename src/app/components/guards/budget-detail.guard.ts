import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BUDGET, TRANSACTIONS } from 'src/app/model/constants';

@Injectable({
  providedIn: 'root'
})
export class BudgetDetailGuard implements CanActivate {

  yearMonthReqex = /[0-9]{4}\-[0-9]{2}$/;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const type = route.paramMap.get('type');
      const date = route.paramMap.get('date');
      if(!type || (type.toUpperCase() !== BUDGET && type.toUpperCase() !== TRANSACTIONS)) {
        alert(`Invalid budget type: ${type}`)
        this.router.navigate(['/budget'])
        return false;
      } 
      if (!date || !this.yearMonthReqex.test(date)) {
        alert(`Invalid date format: ${date}`)
        this.router.navigate(['/budget'])
        return false;
      }
      return true;
  }
  
}
