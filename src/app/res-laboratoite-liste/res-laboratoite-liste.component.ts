import { Component, OnInit } from "@angular/core";
import { Laboratoire } from "../laboratoire";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-res-laboratoite-liste",
  templateUrl: "./res-laboratoite-liste.component.html",
  styleUrls: ["./res-laboratoite-liste.component.css"],
})
export class ResLaboratoiteListeComponent implements OnInit {
  laboratoires: Laboratoire[];
  role: string = "";

  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if (this.role != "ROLE_RESPONSABLE") {
      this.router.navigate(["login"]);
    }
    this.getLaboratoires();
  }

  private getLaboratoires() {
    this.laboratoirelistservice.getLaboratoireList().subscribe((data) => {
      this.laboratoires = data;
    });
  }
}
