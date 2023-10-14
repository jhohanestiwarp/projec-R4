import { ProgramManagementModule } from './program-management/program-management.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramSectionsRepository } from './core/repositories/program-sections.repository';
import { ProgramSectionsRepositoryImpl } from './infrastructure/repositories/program-sections.repository.impl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
