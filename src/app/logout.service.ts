import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogoutService {
  private apiUrl = "http://localhost:8081/api/logout";

  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }
}
