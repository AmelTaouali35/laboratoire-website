import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ResponsableDataComponent } from './responsable-data/responsable-data.component';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { ProduitsComponent } from './produits/produits.component';

@NgModule({
  declarations: [AppComponent, LoginComponentComponent, SignUpComponent, ClientListComponent, HomeComponent, UpdateClientComponent, ResponsableDataComponent, LaboratoireComponent, ProduitsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
