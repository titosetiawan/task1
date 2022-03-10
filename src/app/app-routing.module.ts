import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndukComponent} from "./induk/induk.component";

const routes: Routes = [
  {
    path  : 'component', component:IndukComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
