import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover/recover-password/recover-password.component';
import { GeneratecodeComponent } from './recover/generatecode/generatecode.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'recover', component: RecoverPasswordComponent },
  { path: 'generate', component: GeneratecodeComponent },
  { path: 'update', component: UpdatePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizerRoutingModule { }
