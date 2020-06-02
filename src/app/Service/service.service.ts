import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../modelo/usuarios';
import { Observable } from 'rxjs';
import { Loginresponse } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) {
    
   }
   urlPostUser='http://localhost:3000/usuario';

   /*login(
    id: number,
    nombre: string,
    apellido: string,
    genero: string,
    dia: number,
    mes: number,
    year: number,
    telefono: string,
    correo: string,
    nombreUsuario: string,
    contrasena: string,
    fechaUp: string,
    rolUsuario: number
   ):Observable<Loginresponse>{

    return this._http.post<Loginresponse>(this.urlPostUser, {
      id: id,
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      dia: dia,
      mes: mes,
      year: year,
      telefono: telefono,
      correo: correo,
      nombreUsuario: nombreUsuario,
      contrasena: contrasena,
      fechaUp: fechaUp,
      rolUsuario: rolUsuario
    })
   }*/

   login(values):Observable<Loginresponse>{
    console.log("Desde el service");
    console.log(values);
    return this._http.post<Loginresponse>(this.urlPostUser, values)
   }
   
}
