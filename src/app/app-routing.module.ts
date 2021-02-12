import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PdpComponent} from "./pdp/pdp.component";
import {ShelfComponent} from "./shelf/shelf.component";

const routes: Routes = [
  {
    path: "",
    component: ShelfComponent,
    pathMatch: "full"
  },
  {
    path: "pdp",
    component: PdpComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
