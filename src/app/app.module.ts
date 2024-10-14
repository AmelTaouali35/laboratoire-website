import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { FormsModule } from "@angular/forms";
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
import { LabproduitsComponent } from "./labproduits/labproduits.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LaboratoireresComponent } from "./laboratoireres/laboratoireres.component";
import { ProfileuserComponent } from "./profileuser/profileuser.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AuthInterceptorService } from "./services/interceptor/auth-interceptor.service";
import { ResLaboratoiteListeComponent } from './res-laboratoite-liste/res-laboratoite-liste.component';
import { HeaderComponent } from './components/header/header.component';
import { PrfilLaboratoireComponent } from './prfil-laboratoire/prfil-laboratoire.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignUpComponent,
    ClientListComponent,
    HomeComponent,
    UpdateClientComponent,
    LaboratoireComponent,

    LaboratoirelisteComponent,
    ClientLaboratoireComponent,
    DataComponent,
    ModiflabComponent,
    ForgorpasswordComponent,
    ModifRespComponent,
    LaboratoireproduitsComponent,
    LabproduitsComponent,
    SidebarComponent,
    LaboratoireresComponent,
    ProfileuserComponent,
    ProductListComponent,
    ResLaboratoiteListeComponent,
    HeaderComponent,
    PrfilLaboratoireComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
