import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentInfoComponent } from './Components/account-settings/payment-info/payment-info.component';
import { PersonalInfoComponent } from './Components/account-settings/personal-info/personal-info.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { AddPropertyImagesComponent } from './Components/add-property-images/add-property-images.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HostingComponent } from './Components/hosting/hosting.component';
import { PayConfirmComponent } from './Components/Property/property-details/pay-confirm/pay-confirm.component';
import { HostsuccessComponent } from './Components/hostsuccess/hostsuccess.component';
import { NearbyPropertyComponent } from './Components/nearby-property/nearby-property.component';
import { PropertyAddComponent } from './Components/Property/property-add/property-add.component';
import { PropertyDetailsComponent } from './Components/Property/property-details/property-details.component';
import { PropertyOverviewComponent } from './Components/Property/PropertyOverview/property-overview.component';
import { ShowallpropsComponent } from './Components/showallprops/showallprops.component'

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'home', component: HomePageComponent},
  {path:'hosting', component: HostingComponent},
  {path:'property/:id', component: PropertyDetailsComponent},
  {path:'pay', component:PayConfirmComponent},

  {path:'propertyoverview', component: PropertyOverviewComponent},
  {path:'AddProperty', component: PropertyAddComponent},
  {path:'nearbyprop', component: NearbyPropertyComponent},
  {path:'addpropertyimages/:id', component: AddPropertyImagesComponent},
  {path:'hostsuccess', component: HostsuccessComponent},
  {path:'flexible', component: ShowallpropsComponent},


  {path:'account', children: [ // remember to authenticate the user after login and register
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},

  ]},
  {path:'account-settings', children: [ // remember to check if user exists before accessing
    {path:'', component: PersonalInfoComponent},
    {path:'personal-info', component: PersonalInfoComponent},
    {path:'payment-info', component: PaymentInfoComponent},
  ]},
  {path:'home', children: [ // remember to check if user exists before accessing
    {path:'', component: HomePageComponent},
    // {path:'home/:city', component: NearbyPropertyComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
