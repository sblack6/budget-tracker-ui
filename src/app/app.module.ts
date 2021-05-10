import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetGridComponent } from './components/budget-grid/budget-grid.component';
import { BudgetService } from './services/budget.service';
import { AgGridModule } from 'ag-grid-angular';
import { ModifyBudgetComponent } from './components/modify-budget.component';
import { BudgetHomeComponent } from './components/budget-home/budget-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetGridComponent,
    ModifyBudgetComponent,
    BudgetHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    AgGridModule.withComponents([])
  ],
  providers: [ BudgetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
