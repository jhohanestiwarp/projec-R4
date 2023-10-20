import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizerModule } from './modules/authorizer.module';
import { RecoverModule } from './modules/recover/recover.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthRepository } from './core/repositories/auth.repository';
import { AuthService } from './infraestructure/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizerModule,
    RecoverModule,
    BrowserAnimationsModule,
    NgOtpInputModule
  ],
  providers: [{
    provide: AuthRepository,
    useValue: AuthService,
  }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
