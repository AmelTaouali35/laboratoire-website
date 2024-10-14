import { Component, OnInit } from "@angular/core";
import { Laboratoire } from "../laboratoire";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-modiflab",
  templateUrl: "./modiflab.component.html",
  styleUrls: ["./modiflab.component.css"],
})
export class ModiflabComponent implements OnInit {
  selectedLaboratoire: Laboratoire;
  code: string;
  designation: string;
  email: string;
  password: string;
  successMessage: string = "";
  errorMessage: string = "";
  role: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private laboratoireService: LaboratoirelistserviceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const labId = params.get("id");
      if (labId) {
        this.laboratoireService.getLaboratoireById(labId).subscribe(
          (laboratoire) => {
            this.selectedLaboratoire = laboratoire;
          },
          (error) => {
            console.error("Error fetching laboratoire:", error);
            // Handle errors
          }
        );
      }
    });
    this.role = localStorage.getItem("role");
    if (this.role !== "ROLE_ADMIN") {
      this.router.navigate(["login"]);
    }
  }

  submitForm(): void {
    if (this.selectedLaboratoire) {
      this.laboratoireService
        .updateLaboratoire(this.selectedLaboratoire)
        .subscribe(
          (updatedLaboratoire) => {
            console.log(
              "Laboratoire mis à jour avec succès :",
              updatedLaboratoire
            );
            this.successMessage = "Laboratoire mis à jour avec succès !";
            // Afficher l'alerte avec le mot "Laboratoire"
            alert(this.successMessage);
            this.selectedLaboratoire = null;
          },
          (error) => {
            this.errorMessage = "Erreur lors de la mise à jour du laboratoire";
            console.error("Error updating laboratoire:", error);
          }
        );
    }
  }

  clearForm(): void {
    this.code = "";
    this.designation = "";
    this.email = "";
    this.password = "";
    this.successMessage = "";
    this.errorMessage = "";
  }
}
