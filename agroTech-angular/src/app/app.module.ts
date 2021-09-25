import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { ShopComponent } from './shop/shop.component';
import { UpdateFarmerComponent } from './update-farmer/update-farmer.component';
import { AgriFeedComponent } from './agri-feed/agri-feed.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LearnComponent,
    ShopComponent,
    UpdateFarmerComponent,
    AgriFeedComponent,
    FarmerHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent,LoginComponent]
})
export class AppModule { }
