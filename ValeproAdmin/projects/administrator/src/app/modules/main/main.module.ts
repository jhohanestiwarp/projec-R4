import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class MainModule { }
