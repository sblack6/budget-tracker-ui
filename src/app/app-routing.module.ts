import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetGridComponent } from './budget-grid/budget-grid.component';

const routes: Routes = [
  { path: "", component: BudgetGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
