import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('Authorizer/AuthorizerModule').then(m => m.AuthorizerModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
