import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetHomeComponent } from './components/budget-home/budget-home.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { EditBudgetComponent } from './components/edit-budget/edit-budget.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'budget', component: BudgetHomeComponent },
  { path: 'budget/:type/:date', component: BudgetListComponent },
  { path: 'budget/edit/:type/:date', component: EditBudgetComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
