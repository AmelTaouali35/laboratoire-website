import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("token from storage", localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token") as string;
      console.log("token ", token);
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + token,
        },
      });
    }
    return next.handle(req);
  }
}
