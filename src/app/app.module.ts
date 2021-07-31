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
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';

import { NearbyPropertyComponent } from './Components/nearby-property/nearby-property.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { LandingPageNavbarComponentComponent } from './Components/landing-page-navbar-component/landing-page-navbar-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonalInfoComponent } from './Components/account-settings/personal-info/personal-info.component';
import { PaymentInfoComponent } from './Components/account-settings/payment-info/payment-info.component';
import { PayConfirmComponent } from './Components/Property/property-details/pay-confirm/pay-confirm.component';


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
    NearbyPropertyComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageNavbarComponentComponent,
    PersonalInfoComponent,
    PaymentInfoComponent,
    PayConfirmComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule
  ],
  providers: [],
  // declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
