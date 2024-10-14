import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaboratoireService } from "../laboratoire.service";
import { Customer } from "../customer";

@Component({
  selector: "app-laboratoireproduits",
  templateUrl: "./laboratoireproduits.component.html",
  styleUrls: ["./laboratoireproduits.component.css"],
})
export class LaboratoireproduitsComponent implements OnInit {
  laboratoireId: string;
  customers: Customer[];

  constructor(
    private route: ActivatedRoute,
    private laboratoireService: LaboratoireService
  ) {}

  ngOnInit(): void {}
}
