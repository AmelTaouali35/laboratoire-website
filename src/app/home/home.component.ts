import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swiper from "swiper";
import { User } from "../user";
import { CompteuserService } from "../compteuser.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  user: User | undefined;

  constructor(private compteuserService: CompteuserService) {}

  ngOnInit(): void {
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
}
