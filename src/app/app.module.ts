import {HttpClientModule} from "@angular/common/http";
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {GalleriaModule} from "primeng/galleria";
import {ToastModule} from "primeng/toast";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from "./app.service";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ProductComponent} from './product/product.component';
import {ShelfComponent} from './shelf/shelf.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { UserWidgetComponent } from './user-widget/user-widget.component';
import { PdpComponent } from './pdp/pdp.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    GalleriaModule
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
    NotfoundComponent
  ],
  providers:    [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (appService: AppService) => () => appService.getInitialData().toPromise(),
      deps: [AppService]
    },
    MessageService
  ],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
