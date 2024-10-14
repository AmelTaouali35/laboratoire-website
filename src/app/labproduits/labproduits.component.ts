import { Component, OnInit } from "@angular/core";
import { Produit } from "../produit";
import { ActivatedRoute } from "@angular/router";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";

@Component({
  selector: "app-labproduits",
  templateUrl: "./labproduits.component.html",
  styleUrls: ["./labproduits.component.css"],
})
export class LabproduitsComponent implements OnInit {
  products: Produit[];

  constructor(
    private route: ActivatedRoute,
    private laboratoirelistservice: LaboratoirelistserviceService
  ) {}

  ngOnInit(): void {
    const laboratoireId = this.route.snapshot.paramMap.get("id");
    if (laboratoireId) {
      this.getProducts(Number(laboratoireId));
    }
  }

  getProducts(laboratoireId: number) {
    this.laboratoirelistservice.getAllProducts(laboratoireId).subscribe(
      (res) => {
        this.products = res;
      },
      (error) => console.error(error)
    );
  }
}
