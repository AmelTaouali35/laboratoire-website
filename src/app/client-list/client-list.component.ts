import { Component, OnInit } from "@angular/core";
import { Client } from "../client";
import { ListClientService } from "../list-client.service";
import { Laboratoire } from "../laboratoire";
import { Router } from "@angular/router";
import { UserInfo } from "../models/user-info";
import { UserService } from "../services/user.service";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { CompteuserService } from "../compteuser.service";
import { User } from "../user";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"],
})
export class ClientListComponent implements OnInit {
  laboratoires: Laboratoire[];
  users: UserInfo[];
  role: string = "";
  user: User | undefined;
  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private userservice: UserService,
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit(): void {
    this.getResponsibleUsers();
    this.role = localStorage.getItem("role");
    if (this.role != "ROLE_ADMIN") {
      this.router.navigate(["login"]);
    }
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  private getResponsibleUsers() {
    this.userservice.getResponsibleUsers().subscribe((data) => {
      this.users = data;
    });
  }

  updateClient(id: string, role: string) {
    if (role === "ROLE_RESPONSABLE") {
      this.router.navigate(["ModifRespComponent/edit", id]);
    }
  }

  deleteClient(id: string): void {
    const confirmDelete = confirm(
      "Êtes-vous sûr de vouloir supprimer ce Responsable ?"
    );
    if (confirmDelete) {
      this.userservice.deleteUser(id).subscribe(
        () => {
          this.users = this.users.filter((user) => user.id !== id);
        },
        (error) => {
          console.error("Error deleting user:", error);
        }
      );
    }
  }

  updateLaboratoire(id: string, role: string): void {
    if (role === "ROLE_LABORATOIRE") {
      this.router.navigate(["ModiflabComponent/edit", id]);
    }
  }

  deleteLaboratoire(id: string): void {
    const confirmDelete = confirm(
      "Êtes-vous sûr de vouloir supprimer ce Responsable ?"
    );
    if (confirmDelete) {
      this.laboratoirelistservice.deleteLaboratoire(id).subscribe(
        () => {
          this.laboratoires = this.laboratoires.filter((l) => l.id !== id);
        },
        (error) => {
          console.error("Error deleting laboratoire:", error);
        }
      );
    }
  }
}
