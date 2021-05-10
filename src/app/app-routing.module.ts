import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetHomeComponent } from './components/budget-home/budget-home.component';

const routes: Routes = [
  { path: "", component: BudgetHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
