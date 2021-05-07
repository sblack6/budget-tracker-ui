import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-budget',
  templateUrl: './modify-budget.component.html',
  styleUrls: ['./modify-budget.component.css']
})
export class ModifyBudgetComponent implements OnInit {

  @Input() budget: any;

  constructor() { }

  ngOnInit(): void {
  }

  // 1. ng For --> each field of budget
  // 2. ng form 
  // 3. Service method --> put upon submit
  // 4. Format the page
  // 5. Make it a modal.
  // 6. How to select / edit a column from ag-grid (to pass into this component)
  //  Refresh grid data.
  // (Can I just modify the transactions in PC?) (Can I add transactions?)

}
