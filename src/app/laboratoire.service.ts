import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "./customer";

@Injectable({
  providedIn: "root",
})
export class LaboratoireService {
  private apiUrl = "/api/v1/labs";

  constructor(private http: HttpClient) {}

  getAllCustomers(id: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/${id}/donnees`);
  }
}
