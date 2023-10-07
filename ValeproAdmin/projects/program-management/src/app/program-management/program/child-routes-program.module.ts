import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { GestSeccionesComponent } from './gest-secciones/gest-secciones.component';

const childRoutes: Routes = [
  {
    path: 'general-information',
    component: InfoGeneralComponent,
  },
  {
    path: 'program-sections',
    component: GestSeccionesComponent,
  },
  { path:'', redirectTo: '/main/programs/general-information', pathMatch: 'full' }
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesProgramModule { }
