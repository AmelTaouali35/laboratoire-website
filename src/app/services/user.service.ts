import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "../models/user-info";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userApi = environment.baseUrl + "/users";

  constructor(private httpClient: HttpClient) {}

  deleteUser(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.userApi}/deleteUser/${id}`);
  }
  getResponsableById(id: string): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(`${this.userApi}/getUser/${id}`);
  }

  updateResponsable(userinfo: UserInfo): Observable<UserInfo> {
    return this.httpClient.put<UserInfo>(
      `${this.userApi}/updateUser/${userinfo.id}`,
      userinfo
    );
  }
  getResponsibleUsers(): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>(
      `${this.userApi}/getResponsibleUsers`
    );
  }
}
