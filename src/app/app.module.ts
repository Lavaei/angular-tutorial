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
import {InputTextareaModule} from "primeng/inputtextarea";
import {RatingModule} from "primeng/rating";
import {SliderModule} from "primeng/slider";
import {ToastModule} from "primeng/toast";
import {TooltipModule} from "primeng/tooltip";
import {environment} from "../environments/environment";
import {AngularBankService} from "./angular-bank.service";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from "./app.service";
import {BankService} from "./bank.service";
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GatewayResultComponent} from './gateway-result/gateway-result.component';
import {HeaderComponent} from './header/header.component';
import {LoadingComponent} from './loading/loading.component';
import {MenuComponent} from './menu/menu.component';
import {NotfoundComponent} from "./notfound/notfound.component";
import {OpenExternalLinksInNewTabDirective} from './open-external-links-in-new-tab.directive';
import {PdpComponent} from './pdp/pdp.component';
import {ProductImagesPipe} from './product-images.pipe';
import {ProductComponent} from './product/product.component';
import {RateComponent} from './rate/rate.component';
import {ShelfComponent} from './shelf/shelf.component';
import {TabViewComponent} from './tab-view/tab-view.component';
import {TabComponent} from './tab/tab.component';
import {API_URL} from "./tokens";
import {UserWidgetComponent} from './user-widget/user-widget.component';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
		InputNumberModule,
		InputTextareaModule,
		SliderModule
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
    GatewayResultComponent,
    RateComponent,
    OpenExternalLinksInNewTabDirective,
    ProductImagesPipe,
    TabViewComponent,
    TabComponent,
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
	  {
			provide: BankService,
		  useClass: AngularBankService
	  },
    MessageService
  ],
  bootstrap:    [AppComponent]
})
export class AppModule
{
}
