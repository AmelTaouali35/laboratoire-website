import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { HomeComponent } from "./home/home.component";
import { UpdateClientComponent } from "./update-client/update-client.component";
import { LaboratoireComponent } from "./laboratoire/laboratoire.component";
import { ProduitsComponent } from "./produits/produits.component";

const routes: Routes = [
  { path: "login", component: LoginComponentComponent },
  { path: "signup", component: SignUpComponent },
  { path: "clients", component: ClientListComponent },
  { path: "Home", component: HomeComponent },
  { path: "update-client/:id", component: UpdateClientComponent },
  { path: "laboratoire", component: LaboratoireComponent },
  { path: "produits", component: ProduitsComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
