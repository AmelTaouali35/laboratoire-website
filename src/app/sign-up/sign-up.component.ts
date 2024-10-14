import { Component, OnInit } from "@angular/core";
import { AccountService } from "../account.service";
import { Router } from "@angular/router";
import { CompteuserService } from "../compteuser.service";
import { User } from "../user";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  email: string = "";
  password: string = "";
  role: string = "";
  successMessage: string = "";
  errorMessage: string = "";
  roleConnected: string = "";
  user: User | undefined;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit(): void {
    this.roleConnected = localStorage.getItem("role")!;
    if (this.roleConnected !== "ROLE_ADMIN") {
      this.router.navigate(["login"]);
    }
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  createAccount(): void {
    if (!this.email || !this.password) {
      alert("Tous les champs sont obligatoires!");
      return;
    }

    const accountData = {
      email: this.email,
      password: this.password,
      role: this.role,
    };

    this.accountService.createAccount(accountData).subscribe(
      (response: any) => {
        console.log("Success response:", response);
        alert("Compte créé avec succès!");

        // envoyer un mail to le utlidsateur
        this.sendAccountCreationEmail();

        this.clearForm();
      },
      (error: any) => {
        console.error("Error response:", error);
        if (error.status === 400) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage =
            "Une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer plus tard.";
        }
      }
    );
  }

  sendAccountCreationEmail(): void {
    const emailData = {
      email: this.email,
      password: this.password,
    };

    this.accountService.sendEmail(emailData).subscribe(
      (res: any) => {
        console.log("Email sent successfully:", res);
      },
      (err: any) => {
        console.error("Error sending email:", err);
      }
    );
  }

  clearForm(): void {
    this.email = "";
    this.password = "";
    this.role = "";
  }
}
