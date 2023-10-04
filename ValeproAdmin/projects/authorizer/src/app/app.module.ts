import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizerModule } from './modules/authorizer.module';
import { RecoverModule } from './modules/recover/recover.module';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgOtpInputModule } from 'ng-otp-input';
import { LoginRepository } from './core/repositories/login.repository';
import { LoginRepositoryImpl } from './infraestructure/repositories/login.repository.impl';


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
    provide: LoginRepository,
    useValue: LoginRepositoryImpl,
  }
],
  bootstrap: [AppComponent],

})
export class AppModule { }
