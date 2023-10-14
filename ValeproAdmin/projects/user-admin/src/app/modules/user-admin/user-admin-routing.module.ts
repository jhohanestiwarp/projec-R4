import { UserAdminComponent } from './user-admin.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
path:'',
component:UserAdminComponent,
loadChildren: () =>import('./child-routes.useradmin.module').then((m)=>m.ChildRoutesUserAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }
