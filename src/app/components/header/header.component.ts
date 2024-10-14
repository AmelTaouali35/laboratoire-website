import { Component, OnInit } from "@angular/core";
import { CompteuserService } from "src/app/compteuser.service";
import { Laboratoire } from "src/app/laboratoire";
import { LogoutService } from "src/app/logout.service";
import { User } from "src/app/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  user: User | undefined;
  laboratoire: Laboratoire | undefined;
  constructor(private compteuserService: CompteuserService) {}

  ngOnInit(): void {
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
}
