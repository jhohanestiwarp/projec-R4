import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemManagementModule } from './system-management/system-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, SystemManagementModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
