import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-laboratoire",
  templateUrl: "./laboratoire.component.html",
  styleUrls: ["./laboratoire.component.css"],
})
export class LaboratoireComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    // Redirige vers la page de connexion lorsque le bouton de déconnexion est cliqué
    this.router.navigate(["/login"]); // Assurez-vous que '/login' est la route correcte vers votre page de connexion
  }
}
