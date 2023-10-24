import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './modules/guard/auth.guard';
import { noAuthGuard } from './modules/guard/no-auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('Authorizer/AuthorizerModule').then(m => m.AuthorizerModule),
    canActivate: [noAuthGuard]
  },
  { path: "**", redirectTo: "/main/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
