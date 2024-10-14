import { Component, OnInit } from "@angular/core";
import { ForgetPasswordService } from "../forget-password.service";

@Component({
  selector: "app-forgorpassword",
  templateUrl: "./forgorpassword.component.html",
  styleUrls: ["./forgorpassword.component.css"],
})
export class ForgorpasswordComponent implements OnInit {
  email: string;

  constructor(private forgetPasswordService: ForgetPasswordService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.forgetPasswordService
      .forgotPassword(this.email)
      .subscribe((response) => {
        // Handle response
        console.log(response);
      });
  }
}
