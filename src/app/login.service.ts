import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { AuthenticationRequest } from "./models/authentication-request";
import { AuthenticationResponse } from "./models/authentication-response";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private baseUrl = "http://localhost:8081/api/v1/auth/login";
  constructor(private httpClient: HttpClient) {}
  loginUser(data: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(this.baseUrl, data);
  }
}
