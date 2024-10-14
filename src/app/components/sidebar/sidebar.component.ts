import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LogoutService } from "src/app/logout.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  role: string = "";

  constructor(private logoutService: LogoutService, private router: Router) {}

  ngOnInit() {
    this.role = localStorage.getItem("role") || "";
  }

  logout(): void {
    this.logoutService.logout().subscribe(
      () => {
        // Handle logout success
        console.log("Logged out successfully");
        localStorage.clear(); // Clear local storage
        this.router.navigate(["/login"]); // Redirect to login page
      },
      (error) => {
        // Handle logout error
        console.error("Logout failed:", error);
      }
    );
  }
}
