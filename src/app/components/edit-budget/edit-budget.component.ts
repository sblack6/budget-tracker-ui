import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { MonthlySpending, BUDGET_NUMERICAL_ENTRIES } from 'src/app/model/monthly-spending';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.css']
})
export class EditBudgetComponent implements OnInit {

  type: any;
  date: any;
  budgetFields = BUDGET_NUMERICAL_ENTRIES
  budgetData!: MonthlySpending;
  budgetForm!: FormGroup;

  constructor(private route: ActivatedRoute, private budgetService: BudgetService, private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.date = this.route.snapshot.paramMap.get('date');
    this.budgetService.search(this.type, this.date).subscribe(
      data => {
        this.budgetData = data[0]
        this.initForm()
      }
    )
  }

  initForm() {
    this.budgetForm = this.formBuilder.group({
      date: [{value: this.budgetData.date, disabled: true}],
      type: [{value: this.budgetData.type, disabled: true}],
      inProgress: [this.budgetData.inProgress],
      rent: [this.budgetData.rent],
      groceries: [this.budgetData.groceries],
      travel: [this.budgetData.travel],
      restaurants: [this.budgetData.restaurants],
      loans: [this.budgetData.loans],
      clothing: [this.budgetData.clothing],
      general_merchandise: [this.budgetData.general_merchandise],
      home_improvement: [this.budgetData.home_improvement],
      hobbies: [this.budgetData.hobbies],
      cable: [this.budgetData.cable],
      entertainment: [this.budgetData.entertainment],
      gifts: [this.budgetData.gifts],
      utilities: [this.budgetData.utilities],
      atm: [this.budgetData.atm],
      gas: [this.budgetData.gas],
      healthcare: [this.budgetData.healthcare],
      subscriptions: [this.budgetData.subscriptions],
      gym: [this.budgetData.gym],
      automotive: [this.budgetData.automotive],
      food_delivery: [this.budgetData.food_delivery],
      taxes: [this.budgetData.taxes],
      transportation: [this.budgetData.transportation],
      uber: [this.budgetData.uber],
      charitable_giving: [this.budgetData.charitable_giving],
      mortgage: [this.budgetData.mortgage],
      total: [{value: this.budgetData.total, disabled: true}]
    })

    this.budgetForm.valueChanges.pipe(
      debounceTime(1000),
      throttleTime(1000),
      distinctUntilChanged()
    ).subscribe(data => {
      this.updateTotal(data)
    })
  }

  updateTotal(data: Object) {
    let total = 0
    Object.values(data).forEach(value => {
      if(!isNaN(value)) {
        total += value
      }
    })
    this.budgetForm.get('total')?.patchValue( total, {emitEvent: false} )
  }

  save() {
    const updatedData: MonthlySpending = {
      ...this.budgetData,
      ...this.budgetForm.value
    }
    this.budgetService.put(updatedData).subscribe(
      data => {
        console.log("Success! Updated data:\n" + JSON.stringify(data, null, 2))
        this.budgetForm.reset()
        this.router.navigate(['/budget'])
      },
      error => console.log("Error updating data: " + JSON.stringify(error)) 
    )
  }

}
