import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'
import {GMapModule} from 'primeng/gmap';
import { GoogleMapsAngularModule } from 'google-maps-angular';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './Components/Property/property-list/property-list.component';
import { PropertyAddComponent } from './Components/Property/property-add/property-add.component';
import { PropertyEditComponent } from './Components/Property/property-edit/property-edit.component';
import { PropertyDeleteComponent } from './Components/Property/property-delete/property-delete.component';
import { PropertyDetailsComponent } from './Components/Property/property-details/property-details.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CityComponent } from './Components/city/city.component';
import { CountryComponent } from './Components/country/country.component';
import { HostingComponent } from './Components/hosting/hosting.component';
import { NearbyPropertyComponent } from './Components/nearby-property/nearby-property.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { LandingPageNavbarComponentComponent } from './Components/landing-page-navbar-component/landing-page-navbar-component.component';
import { PersonalInfoComponent } from './Components/account-settings/personal-info/personal-info.component';
import { PaymentInfoComponent } from './Components/account-settings/payment-info/payment-info.component';
import { PayConfirmComponent } from './Components/Property/property-details/pay-confirm/pay-confirm.component';

// import { PropertyOverviewComponent } from './Components/Property/PropertyOverview/property-overview.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { NotifierModule } from 'angular-notifier';
import { AddPropertyImagesComponent } from './Components/add-property-images/add-property-images.component';
import { HostsuccessComponent } from './Components/hostsuccess/hostsuccess.component';
import { ShowallpropsComponent } from './Components/showallprops/showallprops.component';
import { PropertyOverviewComponent } from './Components/Property/PropertyOverview/property-overview.component';
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
    ShowallpropsComponent,
    PayConfirmComponent,
    PropertyOverviewComponent,
    AddPropertyImagesComponent,
    HostsuccessComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    GoogleMapsModule,
    GMapModule,
    GoogleMapsAngularModule.forRoot({googleMapsKey: 'AIzaSyC6SjpXEUcksQ9CEFKRZx0Jq0Atass0d9E'}),
    DialogModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    DividerModule,
    PasswordModule,
    NotifierModule.withConfig(
      {
        position: {
          vertical: { position:"top" , distance:80},
          horizontal: { position: "right"}
        },
        // animations :{ enabled:true },
        // theme:"material design"
      }
      )
  ],
  providers: [],
  // declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
