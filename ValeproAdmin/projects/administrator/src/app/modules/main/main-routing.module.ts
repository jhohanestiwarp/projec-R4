import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../shared/components';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
