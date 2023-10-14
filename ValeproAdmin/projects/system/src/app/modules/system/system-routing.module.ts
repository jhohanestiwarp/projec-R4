import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    loadChildren: () => import('./management/child-routes.system.module').then((m) => m.ChildRoutesSystemModule )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
