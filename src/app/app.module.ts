import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WelcomeComponent } from './front1/welcome/welcome.component';
import { NosotrosComponent } from './front1/nosotros/nosotros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CrearCuentaComponent } from './front1/crear-cuenta/crear-cuenta.component';
import { ListarUsuariosComponent } from './front1/listar-usuarios/listar-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './front2/panel/usuario/usuario.component';
import { LoginComponent } from './front1/login/login.component';
import { AsideComponent } from './front2/layout/aside/aside.component';
import { EventosRectanguloComponent } from './front2/eventos-rectangulo/eventos-rectangulo.component';
import { ApuestasComponent } from './front2/apuestas/apuestas.component';
import { FooterF2Component } from './front2/layout/footer-f2/footer-f2.component';
import { NavbarF2Component } from './front2/layout/navbar-f2/navbar-f2.component';
import { PeleaApuestaComponent } from './front2/pelea-apuesta/pelea-apuesta.component';
import { MisCrucesComponent } from './front2/mis-cruces/mis-cruces.component';
import { CuentaComponent } from './front2/cuenta/cuenta.component';
import { DepocitoComponent } from './front2/depocito/depocito.component';
import { RetiroComponent } from './front2/retiro/retiro.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    WelcomeComponent,
    NosotrosComponent,
    CrearCuentaComponent,
    ListarUsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    AsideComponent,
    EventosRectanguloComponent,
    ApuestasComponent,
    FooterF2Component,
    NavbarF2Component,
    PeleaApuestaComponent,
    MisCrucesComponent,
    CuentaComponent,
    DepocitoComponent,
    RetiroComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
