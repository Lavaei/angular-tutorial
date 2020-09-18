import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ShelfComponent} from './shelf/shelf.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    ProductComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
