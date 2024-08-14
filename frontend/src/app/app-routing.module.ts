import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdministracionComponent,

   },
   {
    path: 'login_signup',
    component: LoginSignupComponent,

   },
   {
    path: 'consulta',
    component: ConsultaComponent,

   },
   {
    path: '**',
    redirectTo: 'consulta',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
