import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class CompteuserService {
  private apiUrl = "http://localhost:8081/api/v1";
  private userSource = new BehaviorSubject<User | undefined>(undefined);
  currentUser = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  getUserProfile(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile/${id}`);
  }

  updateUser(user: User) {
    this.userSource.next(user);
  }
}
