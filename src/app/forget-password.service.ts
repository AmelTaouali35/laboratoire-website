import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ForgetPasswordService {
  private baseUrl = "http://localhost:8081"; // Update with your Spring Boot server URL

  constructor(private http: HttpClient) {}

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reset-password`, {
      token,
      password,
    });
  }
}
