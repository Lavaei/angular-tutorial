import {HttpClientModule} from "@angular/common/http";
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {GalleriaModule} from "primeng/galleria";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {RatingModule} from "primeng/rating";
import {ToastModule} from "primeng/toast";
import {TooltipModule} from "primeng/tooltip";
import {environment} from "../environments/environment";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from "./app.service";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ProductComponent} from './product/product.component';
import {ShelfComponent} from './shelf/shelf.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {API_URL} from "./tokens";
import { UserWidgetComponent } from './user-widget/user-widget.component';
import { PdpComponent } from './pdp/pdp.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { GatewayResultComponent } from './gateway-result/gateway-result.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		ToastModule,
		GalleriaModule,
		RatingModule,
		InputTextModule,
		ButtonModule,
		TooltipModule,
		InputNumberModule
	],
  declarations: [
    AppComponent,
    ShelfComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    UserWidgetComponent,
    PdpComponent,
    NotfoundComponent,
    GalleryComponent,
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    GatewayResultComponent
  ],
  providers:    [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (appService: AppService) => () => appService.getInitialData().toPromise(),
      deps: [AppService]
    },
	  {
	  	provide: API_URL,
		  useValue: environment.api.mockUrl
	  },
    MessageService
  ],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
