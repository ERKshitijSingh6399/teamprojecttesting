import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgriFeedComponent } from './agri-feed/agri-feed.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { UpdateFarmerComponent } from './update-farmer/update-farmer.component';


const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'home',component:HomeComponent},
  {path: 'learn',component:LearnComponent},
  {path: 'shop',component:ShopComponent},
  {path: 'updateFarmer',component:UpdateFarmerComponent},
  {path: 'agriFeed',component:AgriFeedComponent},
  {path: 'footer',component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
