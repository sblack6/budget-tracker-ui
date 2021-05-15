import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ALL_BUDGET_FIELDS, MonthlySpending } from 'src/app/model/monthly-spending';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnChanges {

  @Input() budgetData!: MonthlySpending
  displayData!: any[]
  budgetFields = ALL_BUDGET_FIELDS

  constructor() { }

  ngOnChanges(): void {
    this.displayData = this.budgetFields
    Object.entries(this.budgetData).forEach( ([key, value]) => {
      let index = this.displayData.findIndex(item => item.field == key)
      this.displayData[index] = {
        ...this.displayData[index],
        value: value
      }
    })
    console.log("Display data:\n" + JSON.stringify(this.displayData, null, 2))
  }

}
