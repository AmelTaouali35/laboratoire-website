import { Component, OnInit } from "@angular/core";
import { Client } from "../client";
import { ListClientService } from "../list-client.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"],
})
export class ClientListComponent implements OnInit {
  clients: Client[];

  constructor(
    private listclientService: ListClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  private getClients() {
    this.listclientService.getClientsList().subscribe((data) => {
      this.clients = data;
    });
  }
  updateClient(userId: Number) {
    this.router.navigate(["update-client", userId]);
  }
  logout() {
    // Redirige vers la page de connexion lorsque le bouton de déconnexion est cliqué
    this.router.navigate(["/login"]); // Assurez-vous que '/login' est la route correcte vers votre page de connexion
  }
}
