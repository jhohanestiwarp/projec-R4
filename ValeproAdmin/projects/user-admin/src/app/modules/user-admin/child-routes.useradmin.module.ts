import { MasiveUsersComponent } from './masive-users/masive-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationFormComponent } from './components';


const childRoutes: Routes = [
  {
    path: 'users',
    component: UserRegistrationComponent,
  },
  {
    path: 'create-users',
    component: UserRegistrationFormComponent,
  },
  {
    path: 'masive-users',
    component: MasiveUsersComponent,
  },
  { path:'', redirectTo: '/main/user/users', pathMatch: 'full' }
]
@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesUserAdminModule { }





