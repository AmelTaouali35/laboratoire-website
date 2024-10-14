import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-client",
  templateUrl: "./update-client.component.html",
  styleUrls: ["./update-client.component.css"],
})
export class UpdateClientComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    this.router.navigate(["/login"]);
  }
}
