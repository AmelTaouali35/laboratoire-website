import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Produit } from "../produit";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Produit[] = [];
  labId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private laboratoirelistservice: LaboratoirelistserviceService
  ) {}

  ngOnInit(): void {
    this.labId = +localStorage.getItem("id");
    this.getAllProducts();
    const role = localStorage.getItem("role");

    if (!role) {
      this.router.navigate(["/login"]);
      return;
    }
  }

  getAllProducts() {
    this.laboratoirelistservice.getAllProducts(this.labId).subscribe(
      (res) => {
        this.products = res;
      },
      (errror) => console.error(errror)
    );
  }
}
