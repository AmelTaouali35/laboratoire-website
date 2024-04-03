import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private baseUrl = "http://localhost:8081/api/auth/login";

  constructor(private httpClient: HttpClient) {}
  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(this.baseUrl, user);
  }
}
