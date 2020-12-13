import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import {AddEventComponent} from './add-event/add-event.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashEventComponent} from './dash-event/dash-event.component';
import {DashCatComponent} from './dash-cat/dash-cat.component';
import {UpdateEventComponent} from './update-event/update-event.component';
import {UpdateCategorieComponent} from './update-categorie/update-categorie.component';
import {SingleEventComponent} from './single-event/single-event.component';
import {LoginComponent} from './login/login.component';



const routes: Routes = [
  {path: 'accueil', component: AddCategorieComponent},
  {path: 'shop', component: MainTemplateComponent},
  {path: 'addevent', component: AddEventComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/event', component: DashEventComponent},
  {path: 'dashboard/cat', component: DashCatComponent },
  {path: 'Update/Event/:id', component: UpdateEventComponent},
  {path: 'single/event/:id', component: SingleEventComponent},
  {path: 'Update/Categ/:id', component: UpdateCategorieComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
