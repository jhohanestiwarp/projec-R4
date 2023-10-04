import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as pages from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'sections', pathMatch: 'full' },
  { path: 'sections', component: pages.SectionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramManagementRoutingModule {}
