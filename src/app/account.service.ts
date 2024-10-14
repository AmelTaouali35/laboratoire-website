import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private apiUrl = "http://localhost:8081/api/v1/users/register";
  private emailApiUrl = "http://localhost:8081/api/v1/users/send-email";

  constructor(private http: HttpClient) {}

  createAccount(accountData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, accountData);
  }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>(this.emailApiUrl, emailData);
  }
}
