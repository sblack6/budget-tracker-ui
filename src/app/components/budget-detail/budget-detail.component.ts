import { Component, Input } from '@angular/core';
import { ALL_BUDGET_FIELDS, MonthlySpending } from 'src/app/model/monthly-spending';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent {

  _budgetData!: MonthlySpending
  @Input() set budgetData(value: MonthlySpending) {
    if (!value) {
      return
    }
    this._budgetData = value;
    this.initDisplayData()
  }

  get budgetData() {
    return this._budgetData
  }

  displayData!: any[]
  budgetFields = ALL_BUDGET_FIELDS

  constructor() { }

  initDisplayData(): void {
    this.displayData = this.budgetFields
    Object.entries(this.budgetData).forEach( ([key, value]) => {
      let index = this.displayData.findIndex(item => item.field == key)
      this.displayData[index] = {
        ...this.displayData[index],
        value: value
      }
    })
  }

}
