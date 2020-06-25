import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../modelo/usuarios';
import { Observable, throwError } from 'rxjs';
import { Loginresponse, los_valoreslos_valores } from '../other/interfaces';
import { getUserOne } from '../other/getUserOne';
import { retry, catchError } from 'rxjs/operators';
import { CrearCuentaComponent } from '../front1/crear-cuenta/crear-cuenta.component';
import { getApuestasJoin } from '../other/apuestasJoion';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  los_valoreslos_valores: object;

  constructor(
    private _http:HttpClient
    ) {   }

   urlPostUser='http://localhost:3000/usuario';
   urlPostUserOne='http://localhost:3000/usuario/';
   urlGetCelOne='http://localhost:3000/usuarioTelefono/';
   urlGetApuestasJoin = 'http://localhost:3000/apuestas';

   login(values):Observable<Loginresponse>{
    console.log("Guardando usuario:");
    console.log(values);
    return this._http.post<Loginresponse>(this.urlPostUser, values)
   }

   entrarService(values){
    console.log("En el service " + this.urlPostUserOne+values.nombreUsuario)
    return this._http.get<getUserOne>(this.urlPostUserOne+values.nombreUsuario);
  }

  

  checarNombreUser(values){
    this.los_valoreslos_valores = values;
    console.log("checarNombreUser "+this.los_valoreslos_valores);
    console.log("En el service " + this.urlPostUserOne+values.nombreUsuario)
    return this._http.get<getUserOne>(this.urlPostUserOne+values.nombreUsuario);
  }
  
  checarTelefono(values){
    console.log("checarTelefono");
    console.log("En el service " + this.urlGetCelOne+values.telefono)
    return this._http.get<getUserOne>(this.urlGetCelOne+values.telefono);    
  }

  apuestasJoin(){
    console.log("En el service " + this.urlGetApuestasJoin)
    return this._http.get<getApuestasJoin>(this.urlGetApuestasJoin);
  }
}