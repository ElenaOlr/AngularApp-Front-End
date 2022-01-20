import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';
import { AvatarComponent } from './atoms/avatar/avatar.component';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';
import { SelectButtonComponent } from './atoms/select-button/select-button.component';
import { SelectButtonGroupComponent } from './atoms/select-button-group/select-button-group.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';
import { TabGroupComponent } from './atoms/tab-group/tab-group.component';
import { TabComponent } from './atoms/tab/tab.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { LoginFormComponent } from './molecules/login-form/login-form.component';
import { HeaderComponent } from './molecules/header/header.component';
import { RegisterFormComponent } from './molecules/register-form/register-form.component';
import { CardsComponent } from './atoms/cards/cards.component';
import { FoodCardComponent } from './molecules/food-card/food-card.component';
import { DetailsComponent } from './molecules/details/details.component';
import { DetailsGroupComponent } from './molecules/details-group/details-group.component';
import { ControlPanelComponent } from './molecules/control-panel/control-panel.component';

import { CarouselComponent } from './molecules/carousel/carousel.component';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { FavoritesService } from './molecules/services/auth/favorites.service';
import { CapitalizePipe } from './atoms/select-button/capitalize.pipe';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectButtonComponent,
    SelectButtonGroupComponent,
    IconButtonComponent,
    CheckboxComponent,
    TabGroupComponent,
    TabComponent,
    AvatarComponent,
    FooterComponent,
    LoginFormComponent,
    HeaderComponent,
    RegisterFormComponent,
    CardsComponent,
    FoodCardComponent,
    DetailsComponent,
    DetailsGroupComponent,
    ControlPanelComponent,
    CarouselComponent,
    SpinnerComponent,
    CapitalizePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SwiperModule,
    HttpClientModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    SelectButtonComponent,
    SelectButtonGroupComponent,
    IconButtonComponent,
    CheckboxComponent,
    TabGroupComponent,
    TabComponent,
    AvatarComponent,
    FooterComponent,
    LoginFormComponent,
    HeaderComponent,
    RegisterFormComponent,
    CardsComponent,
    HttpClientModule,
    DetailsComponent,
    DetailsGroupComponent,
    ControlPanelComponent,
    CarouselComponent,
    SpinnerComponent,
  ],
  providers: [FavoritesService],
})
export class SharedModule {}
