import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonthlySpending } from 'src/app/model/monthly-spending';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {

  type: any;
  date: any;
  budgetData!: MonthlySpending[];

  constructor(private route: ActivatedRoute, private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.date = this.route.snapshot.paramMap.get('date');
    console.log(`Budget edit type: ${this.type}, date: ${this.date}`)
    this.budgetService.search(this.type, this.date).subscribe(
      data => {
        this.budgetData = data;
      }
    )
  }

}
