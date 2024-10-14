import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompteuserService } from "../compteuser.service";
import { User } from "../user";

@Component({
  selector: "app-profileuser",
  templateUrl: "./profileuser.component.html",
  styleUrls: ["./profileuser.component.css"],
})
export class ProfileuserComponent implements OnInit {
  user: User | undefined;

  constructor(
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit() {
    {
      const role = localStorage.getItem("role");

      if (!role) {
        this.router.navigate(["/login"]);
        return;
      }
      this.compteuserService.currentUser.subscribe((user) => {
        this.user = user;
      });
    }

    const userId = localStorage.getItem("id");
    if (userId) {
      this.compteuserService.getUserProfile(userId).subscribe(
        (data) => {
          this.user = data;
          this.compteuserService.updateUser(data); // Update the shared user
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
