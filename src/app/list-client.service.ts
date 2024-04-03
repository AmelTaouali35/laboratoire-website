import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "./client";

@Injectable({
  providedIn: "root",
})
export class ListClientService {
  private baseURL = "http://localhost:8081/api/accounts/clients";

  constructor(private httpClient: HttpClient) {
    console.log("Base URL:", this.baseURL);
  }

  getClientsList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}`);
  }
}
