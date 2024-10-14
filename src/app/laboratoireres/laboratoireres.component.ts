import { Component, OnInit } from "@angular/core";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-laboratoireres",
  templateUrl: "./laboratoireres.component.html",
  styleUrls: ["./laboratoireres.component.css"],
})
export class LaboratoireresComponent implements OnInit {
  role: string = "";

  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if (this.role != "ROLE_RESPONSABLE" && this.role != "ROLE_LABORATOIRE") {
      this.router.navigate(["login"]);
    }
  }
}
