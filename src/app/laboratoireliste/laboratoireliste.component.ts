import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Laboratoire } from "../laboratoire";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { CompteuserService } from "../compteuser.service";
import { User } from "../user";

@Component({
  selector: "app-laboratoireliste",
  templateUrl: "./laboratoireliste.component.html",
  styleUrls: ["./laboratoireliste.component.css"],
})
export class LaboratoirelisteComponent implements OnInit {
  laboratoires: Laboratoire[];
  user: User | undefined;

  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit() {
    {
      this.getLaboratoires();
    }
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  private getLaboratoires() {
    this.laboratoirelistservice
      .getLaboratoireList()
      .subscribe((data) => (this.laboratoires = data));
  }

  viewProducts(laboratoireId: string) {
    this.router.navigate(["/Labproduits", laboratoireId]);
  }
}
