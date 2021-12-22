import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CraftsComponent } from './pages/crafts/crafts.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HandmadestuffComponent } from './handmadestuff/handmadestuff.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    CraftsComponent,
    GiftsComponent,
    HandmadestuffComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
