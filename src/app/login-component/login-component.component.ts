import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { AuthenticationRequest } from "../models/authentication-request";

@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.css"],
})
export class LoginComponentComponent implements OnInit {
  request: AuthenticationRequest = new AuthenticationRequest();
  errorMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }
  Login() {
    if (!this.request.email || !this.request.password) {
      alert("Formulaire incorrect: Veuillez remplir tous les champs.");
      return;
    }

    this.loginService.loginUser(this.request).subscribe(
      (res) => {
        alert("Connexion réussie!");
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        localStorage.setItem("id", "" + res.id);
        this.router.navigate(["Home"]);
      },
      (error) => {
        console.error(error);
        let errorMessage = "Adresse mail ou mot de passe incorect!.";

        if (error.error) {
          errorMessage = error.error.message || errorMessage;
        }

        alert(errorMessage);
      }
    );
  }
}
