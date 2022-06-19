import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NextComponent } from './next/next.component';

const routes: Routes = [
  {path:"", redirectTo:'home',pathMatch:'full'},
  {path:"home", component:MainComponent},
  {path:"home/:id", component:MainComponent},
  {path:"table", component:NextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
