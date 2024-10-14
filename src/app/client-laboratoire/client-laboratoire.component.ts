import { Component, OnInit } from "@angular/core";
import { Laboratoire } from "../laboratoire";
import { Router } from "@angular/router";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { User } from "../user";
import { CompteuserService } from "../compteuser.service";

@Component({
  selector: "app-client-laboratoire",
  templateUrl: "./client-laboratoire.component.html",
  styleUrls: ["./client-laboratoire.component.css"],
})
export class ClientLaboratoireComponent implements OnInit {
  laboratoires: Laboratoire[];
  role: string = "";
  user: User | undefined;
  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if (this.role != "ROLE_ADMIN") {
      this.router.navigate(["login"]);
    }
    {
      this.getLaboratoires();
    }
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  private getLaboratoires() {
    this.laboratoirelistservice.getLaboratoireList().subscribe((data) => {
      this.laboratoires = data;
    });
  }

  updateLaboratoire(id: string, role: string): void {
    if (role === "ROLE_LABORATOIRE") {
      this.router.navigate(["ModiflabComponent/edit", id]);
    }
  }

  deleteLaboratoire(id: string): void {
    const confirmDelete = confirm(
      "Êtes-vous sûr de vouloir supprimer ce laboratoire ?"
    );
    if (confirmDelete) {
      this.laboratoirelistservice.deleteLaboratoire(id).subscribe(
        () => {
          // Remove the deleted laboratory from the list
          this.laboratoires = this.laboratoires.filter((l) => l.id !== id);
        },
        (error) => {
          console.error("Error deleting laboratoire:", error);
          // Handle error deleting the laboratory
        }
      );
    }
  }
}
