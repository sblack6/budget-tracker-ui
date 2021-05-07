import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetGridComponent } from './budget-grid/budget-grid.component';
import { BudgetService } from './services/budget.service';
import { AgGridModule } from 'ag-grid-angular';
import { ModifyBudgetComponent } from './src/app/components/modify-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetGridComponent,
    ModifyBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AgGridModule.withComponents([])
  ],
  providers: [ BudgetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
