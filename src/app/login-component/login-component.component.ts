import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.css"],
})
export class LoginComponentComponent implements OnInit {
  user: User = new User();
  errorMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.user);
    if (!this.user.userId || !this.user.password) {
      this.errorMessage = "Please enter both username and password.";
      return;
    }

    this.loginService.loginUser(this.user).subscribe(
      (data: any) => {
        if (data.role === "admin") {
          this.router.navigate(["/Home"]);
        } else if (data.role === "client") {
        } else if (data.role === "responsible") {
        }
      },
      (error) => {
        alert("Invalid username or password.");
        this.errorMessage = "Invalid username or password.";
      }
    );
  }
}
