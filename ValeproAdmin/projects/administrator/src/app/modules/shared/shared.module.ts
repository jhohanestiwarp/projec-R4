import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as components from './components';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    components.ButtonComponent,
    components.FileInputComponent,
    components.SidenavComponent,
  ],
  exports: [
    components.ButtonComponent,
    components.FileInputComponent,
    components.SidenavComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
