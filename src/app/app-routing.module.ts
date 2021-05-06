import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccederMediosComponent } from './components/acceder-medios/acceder-medios.component';
import { CuentaClienteComponent } from './components/cuenta-cliente/cuenta-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cuenta', component: CuentaClienteComponent},
  { path: 'acceder', component: AccederMediosComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
