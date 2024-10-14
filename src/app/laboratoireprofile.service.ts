import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Laboratoire } from "./laboratoire";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LaboratoireprofileService {
  private apiUrl = "http://localhost:8081/api/v1/labs";

  constructor(private http: HttpClient) {}

  getLaboratoireProfile(id: string): Observable<Laboratoire> {
    return this.http.get<Laboratoire>(`${this.apiUrl}/profile/${id}`);
  }
}
