import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:3000/users"; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  getUserRole(): Observable<string> {
    // Implement logic to get user role from backend
    // Example: Make an HTTP request to fetch user role
    // This can be extended based on your backend implementation
    // For simplicity, let's assume the backend returns the role directly
    return this.http.get<string>(`${this.apiUrl}/role`);
  }
}
