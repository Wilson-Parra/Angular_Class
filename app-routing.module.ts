
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { OfertaComponent } from './oferta/oferta.component';
import { GestionarComponent } from './gestionar/gestionar.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'gestionar', component: GestionarComponent },
  { path: 'Routerlogin', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'Routeroferta', redirectTo: '/oferta', pathMatch: 'full' }, 
  { path: 'Routeradmin', redirectTo: '/admin', pathMatch: 'full' }, 
  { path: 'Routergestionar', redirectTo: '/gestionar', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
