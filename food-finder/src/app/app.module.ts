import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FoodDataService } from './shared/molecules/carousel/foodData.service';
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthService } from './shared/molecules/services/auth/auth.service';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, MainPageComponent],
  imports: [BrowserModule, SharedModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [FoodDataService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
