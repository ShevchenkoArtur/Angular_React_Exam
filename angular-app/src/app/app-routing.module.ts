import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ListCarComponent} from "./list-car/list-car.component";
import {AddCarComponent} from "./add-car/add-car.component";
import {EditCarComponent} from "./edit-car/edit-car.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list-car', component: ListCarComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'edit-car', component: EditCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
