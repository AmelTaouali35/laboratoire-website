import { Component } from "@angular/core";
import { LabService } from "../lab.service";
import { Router } from "@angular/router";
import { CompteuserService } from "../compteuser.service";
import { User } from "../user";

@Component({
  selector: "app-laboratoire",
  templateUrl: "./laboratoire.component.html",
  styleUrls: ["./laboratoire.component.css"],
})
export class LaboratoireComponent {
  code: string;
  designation: string;
  email: string;
  password: string;
  user: User | undefined;

  constructor(
    private labService: LabService,
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit(): void {
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  createLab(): void {
    if (!this.code || !this.designation || !this.email || !this.password) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    const labData = {
      code: this.code,
      designation: this.designation,
      email: this.email,
      password: this.password,
    };

    this.labService.createLab(labData).subscribe(
      (response: any) => {
        console.log("Success response:", response);
        alert("Compte créer avec succès!");
        this.clearForm();
      },
      (error) => {
        console.error(error);
        alert("Erreur lors de l'ajout du laboratoire!");
      }
    );
  }

  clearForm(): void {
    this.code = "";
    this.designation = "";
    this.email = "";
    this.password = "";
  }
}
