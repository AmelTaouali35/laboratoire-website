import { Component, OnInit } from "@angular/core";
import { Laboratoire } from "../laboratoire";
import { LaboratoirelistserviceService } from "../laboratoirelistservice.service";
import { Router } from "@angular/router";
import { CompteuserService } from "../compteuser.service";
import { User } from "../user";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"],
})
export class DataComponent implements OnInit {
  laboratoires: Laboratoire[];
  selectedLaboratoireCode: string = "";
  role: string = "";
  user: User | undefined;

  constructor(
    private laboratoirelistservice: LaboratoirelistserviceService,
    private router: Router,
    private compteuserService: CompteuserService
  ) {}

  ngOnInit(): void {
    this.getLaboratoires();
    this.role = localStorage.getItem("role");
    if (this.role !== "ROLE_ADMIN" && this.role !== "ROLE_RESPONSABLE") {
      this.router.navigate(["login"]);
    }

    // Subscribe to the currentUser observable
    this.compteuserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  private getLaboratoires() {
    this.laboratoirelistservice.getLaboratoireList().subscribe((data) => {
      this.laboratoires = data;
    });
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    this.laboratoirelistservice
      .uploadExcelFile(file, this.selectedLaboratoireCode)
      .subscribe(
        () => {
          window.alert("File uploaded successfully");
          console.log("File uploaded successfully");
          this.getLaboratoires();
        },
        (error) => {
          window.alert("Error uploading file");
          console.error("Error uploading file", error);
        }
      );
  }

  onLaboratoireSelected(code: string) {
    this.selectedLaboratoireCode = code;
    this.laboratoirelistservice.setLaboratoireForCustomers(code).subscribe(
      () => {
        console.log("Laboratoire code set for customers successfully");
      },
      (error) => {
        console.error("Error setting laboratoire code for customers", error);
      }
    );
  }
}
