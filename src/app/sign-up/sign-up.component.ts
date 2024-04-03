import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; // Importez FormBuilder et FormGroup
import { AccountService } from "../account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup; // Déclarez signupForm comme un FormGroup

  successMessage: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder, // Injectez le FormBuilder
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      // Initialisez signupForm avec un FormGroup contenant vos contrôles de formulaire
      userId: ["", Validators.required],
      password: ["", Validators.required],
      role: ["", Validators.required],
    });
  }

  createAccount(): void {
    if (this.signupForm.valid) {
      // Vérifiez si le formulaire est valide avant de soumettre
      const accountData = this.signupForm.value; // Utilisez signupForm.value pour obtenir les valeurs du formulaire
      this.accountService.createAccount(accountData).subscribe(
        (response) => {
          this.successMessage = "Compte créé avec succès!";
          this.clearForm();
          setTimeout(() => {
            this.successMessage = null;
          }, 3000); // Hide success message after 3 seconds
        },
        (error) => {
          this.errorMessage = "error";
          console.error(error);
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000); // Hide error message after 5 seconds
        }
      );
    }
  }

  clearForm(): void {
    this.signupForm.reset(); // Utilisez reset() pour vider le formulaire
  }

  logout() {
    // Redirige vers la page de connexion lorsque le bouton de déconnexion est cliqué
    this.router.navigate(["/login"]); // Assurez-vous que '/login' est la route correcte vers votre page de connexion
  }
}
