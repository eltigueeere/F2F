import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './front1/welcome/welcome.component';
import { NosotrosComponent } from './front1/nosotros/nosotros.component';
import { CrearCuentaComponent } from './front1/crear-cuenta/crear-cuenta.component';
import { ListarUsuariosComponent } from './front1/listar-usuarios/listar-usuarios.component';
import { UsuarioComponent } from './front2/panel/usuario/usuario.component';
import { LoginComponent } from './front1/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adminUsuario', component: UsuarioComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'crearUsuario', component: CrearCuentaComponent },
  { path: 'verUsuarios', component: ListarUsuariosComponent }, 
  { path: '',redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**',redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
