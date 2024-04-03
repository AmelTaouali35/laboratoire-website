import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-produits",
  templateUrl: "./produits.component.html",
  styleUrls: ["./produits.component.css"],
})
export class ProduitsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    this.router.navigate(["/login"]);
  }
}
