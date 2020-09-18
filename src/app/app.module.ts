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
  ],
  providers:    [MessageService],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
