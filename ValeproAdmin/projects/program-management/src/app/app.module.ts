import { ProgramManagementModule } from './program-management/program-management.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgramManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
