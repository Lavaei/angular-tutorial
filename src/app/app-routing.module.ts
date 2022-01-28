import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GatewayResultComponent} from "./gateway-result/gateway-result.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {PdpComponent} from "./pdp/pdp.component";
import {ShelfComponent} from "./shelf/shelf.component";

const routes: Routes = [
  {
    path: "",
    component: ShelfComponent,
    pathMatch: "full"
  },
	{
		path: 'user',
		loadChildren: () => import('./user/user.module').then(m => m.UserModule)
	},
  {
    path: "pdp/:id",
    component: PdpComponent,
    pathMatch: "full"
  },
	{
		path: "gateway/result/:status",
		component: GatewayResultComponent,
		pathMatch: "full"
	},
  {
    path: "**",
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
