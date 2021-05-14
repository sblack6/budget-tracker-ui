import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditBudgetComponent } from '../edit-budget/edit-budget.component';

@Injectable({
  providedIn: 'root'
})
export class BudgetEditGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: EditBudgetComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.budgetForm.dirty) {
        return confirm("Leave this page and lose all changes?")
      }
    return true;
  }
  
}
