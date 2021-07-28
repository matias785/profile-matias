import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {TechnologiesComponent} from "./components/technologies/technologies.component";
import {TrainingComponent} from "./components/training/training.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path: '', component: MainComponent,
  pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'projects', component: ProjectsComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
