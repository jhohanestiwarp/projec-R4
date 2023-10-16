import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramManagementModule } from './program-management/program-management.module';
import { ProgramSectionsRepository } from './core/repositories/program-sections.repository';
import { ProgramSectionsRepositoryImpl } from './infrastructure/repositories/program-sections.repository.impl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ProgramManagementModule
  ],
  providers: [
    {
      provide: ProgramSectionsRepository,
      useValue: ProgramSectionsRepositoryImpl,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
