import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AdministracionComponent } from './administracion/administracion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    ConsultaComponent,
    AdministracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
