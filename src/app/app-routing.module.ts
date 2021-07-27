import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HostingComponent } from './Components/hosting/hosting.component';
import { PropertyDetailsComponent } from './Components/Property/property-details/property-details.component';

const routes: Routes = [
  {path:'', redirectTo: 'hosting',pathMatch:'full'},
  {path:'home', component: HomePageComponent},
  {path:'hosting', component: HostingComponent},
  {path:'property/:id', component: PropertyDetailsComponent},
  {path:'account', children: [ // remember to authenticate the user
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
