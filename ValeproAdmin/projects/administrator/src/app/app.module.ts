import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { SharedModule } from './modules/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './infrastructure/services/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from 'projects/store-lib/src/lib/store/app.state';
import { LookAndFeelService } from './infrastructure/services/look-and-feel.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './modules/shared/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MatIconModule,
    RouterModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
  ],
  providers: [
    { provide: LookAndFeelRepository, useClass:LookAndFeelService  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
