import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesAndFunctionsComponent } from './roles-and-functions/roles-and-functions.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';

const childRoutes: Routes = [
  {
    path: 'roles-and-functions',
    component: RolesAndFunctionsComponent,
  },
  {
    path: 'register-user',
    component: RegisterUserComponent,
  },
  {
    path: 'edit-role',
    component: EditRoleComponent,
  },
  {
    path: 'create-role',
    component: CreateRoleComponent,
  },
  { path:'', redirectTo: '/main/system/roles-and-functions', pathMatch: 'full' }
] 
@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesSystemModule { }





