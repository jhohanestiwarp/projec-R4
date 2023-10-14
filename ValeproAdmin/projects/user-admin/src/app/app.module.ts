import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAdminModule } from "./modules/user-admin/user-admin.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
