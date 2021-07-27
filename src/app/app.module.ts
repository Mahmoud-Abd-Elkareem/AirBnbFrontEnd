import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './Components/Property/property-list/property-list.component';
import { PropertyAddComponent } from './Components/Property/property-add/property-add.component';
import { PropertyEditComponent } from './Components/Property/property-edit/property-edit.component';
import { PropertyDeleteComponent } from './Components/Property/property-delete/property-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDetailsComponent } from './Components/Property/property-details/property-details.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CityComponent } from './Components/city/city.component';
import { CountryComponent } from './Components/country/country.component';
import { HostingComponent } from './Components/hosting/hosting.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NearbyPropertyComponent } from './Components/nearby-property/nearby-property.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyAddComponent,
    PropertyEditComponent,
    PropertyDeleteComponent,
    PropertyDetailsComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    CityComponent,
    CountryComponent,
    HostingComponent,
    RegisterLogInComponent,
    NearbyPropertyComponent
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
