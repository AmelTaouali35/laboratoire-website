import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { HomeComponent } from "./home/home.component";
import { UpdateClientComponent } from "./update-client/update-client.component";
import { LaboratoireComponent } from "./laboratoire/laboratoire.component";
import { LaboratoirelisteComponent } from "./laboratoireliste/laboratoireliste.component";
import { ClientLaboratoireComponent } from "./client-laboratoire/client-laboratoire.component";
import { DataComponent } from "./data/data.component";
import { ModiflabComponent } from "./modiflab/modiflab.component";
import { ForgorpasswordComponent } from "./forgorpassword/forgorpassword.component";
import { ModifRespComponent } from "./modif-resp/modif-resp.component";
import { LaboratoireproduitsComponent } from "./laboratoireproduits/laboratoireproduits.component";
import { LaboratoireresComponent } from "./laboratoireres/laboratoireres.component";
import { ProfileuserComponent } from "./profileuser/profileuser.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { LabproduitsComponent } from "./labproduits/labproduits.component";
import { ResLaboratoiteListeComponent } from "./res-laboratoite-liste/res-laboratoite-liste.component";
import { PrfilLaboratoireComponent } from "./prfil-laboratoire/prfil-laboratoire.component";

const routes: Routes = [
  { path: "login", component: LoginComponentComponent },

  { path: "signup", component: SignUpComponent },
  { path: "clients", component: ClientListComponent },
  { path: "Home", component: HomeComponent },
  { path: "update-client/:id", component: UpdateClientComponent },
  { path: "laboratoire", component: LaboratoireComponent },
  { path: "clientLaboratoire", component: ClientLaboratoireComponent },
  { path: "data", component: DataComponent },
  { path: "Laboratoireres", component: LaboratoireresComponent },

  { path: "LaboratoirelisteComponent", component: LaboratoirelisteComponent },
  { path: "ModiflabComponent/edit/:id", component: ModiflabComponent },
  { path: "forgotpassword", component: ForgorpasswordComponent },
  { path: "ModifRespComponent/edit/:id", component: ModifRespComponent },
  {
    path: "Laboratoireproduits/:id",
    component: LaboratoireproduitsComponent,
  },
  { path: "Laboratoireliste", component: LaboratoireresComponent },
  { path: "profile/:id", component: ProfileuserComponent },
  { path: "laboratoire/products", component: ProductListComponent },
  { path: "Labproduits/:id", component: LabproduitsComponent },
  { path: "ResLaboratoiteListe", component: ResLaboratoiteListeComponent },
  { path: "profilelab/:id", component: PrfilLaboratoireComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
