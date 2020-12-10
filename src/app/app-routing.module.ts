import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import {AddEventComponent} from './add-event/add-event.component';

const routes: Routes = [
  {path: 'accueil', component: AddCategorieComponent},
  {path: 'shop', component: MainTemplateComponent},
  {path: 'addevent', component: AddEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
