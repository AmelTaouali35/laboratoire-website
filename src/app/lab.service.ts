import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LabService {
  apiUrl = "http://localhost:8081/api/v1/labs";

  constructor(private http: HttpClient) {}

  checkUniqueCode(code: string) {
    return this.http.get<boolean>(`${this.apiUrl}/unique/code/${code}`);
  }

  checkUniqueEmail(email: string) {
    return this.http.get<boolean>(`${this.apiUrl}/unique/email/${email}`);
  }

  checkUniqueDesignation(designation: string) {
    return this.http.get<boolean>(
      `${this.apiUrl}/unique/designation/${designation}`
    );
  }

  createLab(labData: any) {
    return this.http.post<any>(`${this.apiUrl}/add`, labData);
  }
}
