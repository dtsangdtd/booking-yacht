import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { DestinationsDetailsComponent } from './pages/destinations/destinations-details/destinations-details.component';
import { BookingNowComponent } from './pages/booking-now/booking-now.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, PagesComponent, LoginComponent, RegisterComponent, GalleryComponent, AboutUsComponent, ServicesComponent, DestinationsComponent, DestinationsDetailsComponent, BookingNowComponent],
  imports: [BrowserModule, AppRoutingModule,PagesRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
   
  ],
})
export class AppModule {}
