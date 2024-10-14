import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Laboratoire } from "../laboratoire";
import { LaboratoireprofileService } from "../laboratoireprofile.service";

@Component({
  selector: "app-prfil-laboratoire",
  templateUrl: "./prfil-laboratoire.component.html",
  styleUrls: ["./prfil-laboratoire.component.css"],
})
export class PrfilLaboratoireComponent implements OnInit {
  laboratoire: Laboratoire | undefined;

  constructor(
    private router: Router,
    private laboratoireService: LaboratoireprofileService
  ) {}

  ngOnInit(): void {
    const role = localStorage.getItem("role");

    if (!role) {
      this.router.navigate(["/login"]);
      return;
    }

    const laboratoireId = localStorage.getItem("id");
    if (laboratoireId) {
      this.laboratoireService.getLaboratoireProfile(laboratoireId).subscribe(
        (data) => {
          this.laboratoire = data;
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération du profil utilisateur :",
            error
          );
        }
      );
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
