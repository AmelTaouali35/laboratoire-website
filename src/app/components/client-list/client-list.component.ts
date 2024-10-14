import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { Laboratoire } from "src/app/laboratoire";
import { LaboratoirelistserviceService } from "src/app/laboratoirelistservice.service";
import { UserInfo } from "src/app/models/user-info";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"],
})
export class ClientListComponent implements OnInit {
  laboratoires: Laboratoire[];

  users: UserInfo[];
  role: string = "";
  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private userservice: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getResponsibleUsers();
    this.role = localStorage.getItem("role");
    if (this.role != "ROLE_ADMIN") {
      this.router.navigate(["login"]);
    }
  }

  private getResponsibleUsers() {
    this.userservice.getResponsibleUsers().subscribe((data) => {
      this.users = data;
    });
  }
  updateClient(id: string, role: string) {
    if (role === "ROLE_RESPONSABLE")
      this.router.navigate(["ModifRespComponent/edit", id]);
  }

  deleteClient(id: string): void {
    this.userservice.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== id);
      },
      (error) => {
        console.error("Error deleting user:", error);
      }
    );
  }
  updateLaboratoire(id: string, role: string): void {
    if (role === "ROLE_LABORATOIRE") {
      this.router.navigate(["ModiflabComponent/edit", id]);
    }
  }

  deleteLaboratoire(id: string): void {
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
