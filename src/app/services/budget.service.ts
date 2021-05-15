import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { MonthlySpending } from '../model/monthly-spending';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application-json'})
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  listMonthlyTransactions() {
    return this.http.get('/server/api/v1/transactions');
  }

  uploadTransactions(inProgress: boolean, source: string, file: File): Observable<any> {
    let type = "TRANSACTIONS";
    let formData: FormData = new FormData();
    formData.append("file", file);
    return this.http.post(`/server/api/v1/transactions/upload-transactions?type=${type}&inProgress=${inProgress}&source=${source}`, formData)
  }

  put(object: MonthlySpending) {
    return this.http.put(`/server/api/v1/transactions/${object.id}`, object)
  }

  getDefaultBudget() {
    return this.http.get('/server/api/v1/transactions/default-budget')
  }

  setDefaultBudget(object: MonthlySpending) {
    return this.http.post('/server/api/v1/transactions/default-budget', object)
  }

  newBudgetFromDefault(date: string, inProgress: boolean): Observable<any> {
    return this.http.post(`/server/api/v1/transactions/default-budget/${date}?inProgress=${inProgress}`, null)
  }

  deleteIfExists(type: string, date: string): Observable<any> {
    return this.http.delete(`/server/api/v1/transactions/delete-if-exists/${type}/${date}`)
  }

  search(type: string, date: string): Observable<any> {
    return this.http.get(`/server/api/v1/transactions/search/${type}/${date}`)
  }
}
