import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ShelfComponent} from './shelf/shelf.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { UserWidgetComponent } from './user-widget/user-widget.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule
  ],
  declarations: [
    AppComponent,
    ShelfComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    UserWidgetComponent,
  ],
  providers:    [MessageService],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
