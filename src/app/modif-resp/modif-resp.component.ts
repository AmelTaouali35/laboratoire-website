import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { UserInfo } from "../models/user-info";

@Component({
  selector: "app-modif-resp",
  templateUrl: "./modif-resp.component.html",
  styleUrls: ["./modif-resp.component.css"],
})
export class ModifRespComponent implements OnInit {
  selectedResponsable: UserInfo = new UserInfo();
  successMessage: string = "";
  errorMessage: string = "";
  email: string;
  password: string;
  role: string = "";

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const ResId = params.get("id");
      if (ResId) {
        this.userService.getResponsableById(ResId).subscribe(
          (userInfo) => {
            this.selectedResponsable = userInfo;
          },
          (error) => {
            console.error("Error fetching Responsable:", error);
          }
        );
      }
      this.role = localStorage.getItem("role");
      if (this.role !== "ROLE_ADMIN" && this.role !== "ROLE_RESPONSABLE") {
        this.router.navigate(["login"]);
      }
    });
    this.role = localStorage.getItem("role");
    if (this.role !== "ROLE_ADMIN" && this.role !== "ROLE_RESPONSABLE") {
      this.router.navigate(["login"]);
    }
  }

  submitForm(): void {
    this.userService.updateResponsable(this.selectedResponsable).subscribe(
      () => {
        alert("Responsable mis à jour avec succès");
      },
      (error) => {
        this.errorMessage = "Erreur lors de la mise à jour du Responsable.";
        console.error("Error updating Responsable:", error);
      }
    );
  }

  clearForm(): void {
    this.email = "";
    this.password = "";
  }
}
