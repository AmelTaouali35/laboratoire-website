import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  apiUrl = "http://localhost:8081/api/accounts/signup";

  constructor(private http: HttpClient) {}

  createAccount(accountData: any) {
    return this.http.post<any>(this.apiUrl, accountData);
  }
}
