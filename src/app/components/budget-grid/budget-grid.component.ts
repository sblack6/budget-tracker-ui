import { Component, OnInit } from '@angular/core';
import { BUDGET, TRANSACTIONS } from 'src/app/model/constants';
import { BudgetService } from '../../services/budget.service';
import { BudgetHomeComponent } from '../budget-home/budget-home.component';
import { HeaderEditComponent } from '../header/header-edit.component';

@Component({
  selector: 'budget-grid',
  templateUrl: './budget-grid.component.html',
  styleUrls: ['./budget-grid.component.css']
})
export class BudgetGridComponent implements OnInit {

  private monthlyTransactions: any;
  isLoading: boolean = true;
  columnDefs: any[] = [{
    headerName: "Category",
    field: "category",
    pinned: "left"
  }];
  rowData: any;
  transposedData: any
  inProgress: any;
  frameworkComponents =
    {
      'headerEditComponent': HeaderEditComponent
    }

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.listMonthlyTransactions();
  }

  public update() {
    this.rowData = [];
    this.columnDefs = [{
      field: "category",
      pinned: "left"
    }];
    this.listMonthlyTransactions();
  }

  listMonthlyTransactions() {
    this.isLoading = true;
    this.budgetService.listMonthlyTransactions().subscribe(
      data => {
        this.monthlyTransactions = data;
        this.formulateGridData();
      },
      err => {
        console.error(err);
        this.isLoading = false;
      },
      () => console.log("Transactions loaded.")
    )
  }

  formulateGridData() {
    this.monthlyTransactions = this.createNetBudgetItems(this.monthlyTransactions)
    this.transposedData = this.transposeData(this.monthlyTransactions);
    this.transposedData = this.avgRows(this.transposedData)
    this.createHeaders()
    this.rowData = this.transposedData
    this.totalRows();
    this.isLoading = false;
  }

  createNetBudgetItems(data: any[]): any[] {
    let netData: any[] = [];
    let months: string[] = []
    data.forEach(item => {
      let month = item.date
      if (!months.includes(month)) {
        months.push(month)
      }
    })
    months.forEach(month => {
      let transactions = data.find(item => item.date === month && item.type == TRANSACTIONS)
      let budget = data.find(item => item.date === month && item.type == BUDGET)
      let netTransactions: any
      Object.entries(budget).forEach(([key, value]) => {
        netTransactions = {
          ...netTransactions,
          [key]: value
        }
      })
      Object.entries(transactions).forEach(([key, value]) => {
        if (typeof(value) == 'number') {
          let oldValue = Object(netTransactions)[key]
          netTransactions = {
            ...netTransactions,
            [key]: value + oldValue
          }
        }
      })
      netTransactions.date = month
      netTransactions.type = 'NET'
      data.push(netTransactions)
    })
    return data
  }

  transposeData(data: any[]) {
    let transposedData: any[] = [];
    let keys = Object.keys(data[0])
    for (let i = 3; i < keys.length-1; i++) {
      transposedData.push({
        category: keys[i]
      });
    }
    data.forEach(monthlyTransactionLog => {
      let values = Object.values(monthlyTransactionLog);
      let type = values[1];
      let month = values[2];
      let headerName: string = this.valueToString(month) + " " + this.valueToString(type);
      for (let i = 3; i < values.length-1; i++) {
        transposedData[i - 3] = {
          ...transposedData[i - 3],
          [headerName]: values[i]
        };
      }
    });
    for (let i = 3; i < transposedData.length-1; i++) {
      let row = transposedData[i];
      this.columnDefs.forEach(header => {
        if (Object.keys(row).indexOf(header.field) == -1) {
          transposedData[i] = {
            ...row,
            [header.field]: 0
          }
        }
      })
    }
    this.inProgress = transposedData[0];
    transposedData.splice(0, 1)
    return transposedData;
  }

  valueToString(value: any): string {
    return JSON.stringify(value).replace('\"', '').replace('\"', '');
  }

  createHeaders() {
    let row = this.transposedData[0]
    Object.keys(row).forEach(key => {
      if (key === "category") {
        return
      }
      let headerName = key.substring(0, 7)
      if (this.columnDefs.findIndex(column => column.headerName == headerName) === -1) {
        this.columnDefs.push({
          headerName: headerName,
          children: [
            this.getBudgetHeader(headerName + ' NET', 'closed'),
            this.getBudgetHeader(headerName + ' BUDGET', 'open'),
            this.getBudgetHeader(headerName + ' TRANSACTIONS', 'open'),
            this.getBudgetHeader(headerName + ' NET', 'open')
          ]
        })
      }
    })
    this.sortHeaders()
  }

  getBudgetHeader(header: string, show: string, ): any {
    let columnDef: any =  {
      field: header,
      valueFormatter: this.currencyFormatter,
      type: 'rightAligned',
      cellStyle: (params: any) => {
        if (header.includes('NET')) {
          if (params.value < 0) {
            return {color: '#C70000'}
          } else if (params.value > 0) {
            return {color: '#15BF00'}
          } else {
            return {color: '#000000'}
          }
        } if (header.includes('TRANSACTIONS')) {
          let budgetValue = params.node.data[header.replace("TRANSACTIONS", "BUDGET")];
          if (Math.abs(params.value) > budgetValue) {
            return {color: '#C70000'}
          } else if (Math.abs(params.value) < budgetValue) {
            return {color: '#15BF00'}
          } else {
            return {color: '#000000'}
          }
        } else {
          return {};
        }
      },
      columnGroupShow: show
    }
    if (!header.includes("NET")) {
      columnDef.headerComponent = 'headerEditComponent'
    }
    return columnDef
  }

  currencyFormatter(params: any) {
    let stringFormat = params.value.toFixed(2);
    if (stringFormat.indexOf('-') != -1 ) {
      stringFormat = stringFormat.replace("-", "- $ ");
    } else {
      stringFormat = '$ ' + stringFormat;
    }
    return stringFormat;
  }

  sortHeaders() {
    // Order them by date-budget, date-transactions
    this.columnDefs.sort((col1, col2) => {
      if (col1.headerName == "category") return -1;
      if (col2.headerName == "category") return 1;
      return col1.headerName.localeCompare(col2.headerName);
    })
  }

  avgRows(data: any[]): any[] {
    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      let numNet: number = 0;
      let netTotal: number = 0;
      let numBudgets: number = 0;
      let budgetTotal: number = 0;
      let numTransactions: number = 0;
      let transactionsTotal: number = 0;
      Object.entries(row).forEach(([key, value]) => {
        if (key == "category") return;
        if (this.inProgress[key]) {
          return;
        }
        if (key.includes("NET")) {
          numNet++;
          netTotal += Number.parseFloat(JSON.stringify(value));
        } else if (key.includes("BUDGET")) {
          numBudgets++;
          budgetTotal += Number.parseFloat(JSON.stringify(value));
        } else if (key.includes("TRANSACTION")) {
          numTransactions++;
          transactionsTotal += Number.parseFloat(JSON.stringify(value));
        }
      });
      let netAvg = netTotal / numNet;
      let budgetAvg = budgetTotal / numBudgets;
      let transactionAvg = transactionsTotal / numTransactions;
      data[i] = {
        ...row,
        "Average NET": netAvg,
        "Average TRANSACTIONS": transactionAvg,
        "Average BUDGET": budgetAvg
      }
    }
    return data
  }

  totalRows() {
    this.columnDefs.push({
      headerName: 'Net Category Balance',
      field: "Total",
      valueFormatter: this.currencyFormatter,
      pinned: "right",
      type: 'rightAligned',
      cellStyle: (params: any) => {
        if (params.value > 0) {
          return {backgroundColor: '#95F7A7'}
        } else if (params.value < 0) {
          return {backgroundColor: '#FFB798'}
        } else {
          return {backgroundColor: '#FFFFFF'}
        }
      }
    });
    // Sum / fill in total & avg columns
    for (let i = 0; i < this.rowData.length; i++) {
      let row = this.rowData[i];
      let total: number = 0;
      Object.entries(row).forEach(([key, value]) => {
        if (key == "category" || key.includes('NET')) return;
        if (this.inProgress[key]) {
          return;
        }
        total += Number.parseFloat(JSON.stringify(value));
      });
      this.rowData[i] = {
        ...row,
        "Total": total
      }
    }
  }
}