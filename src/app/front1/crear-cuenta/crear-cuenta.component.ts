import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css','../../../assets/front1/css/general.css']
})
export class CrearCuentaComponent implements OnInit {

  signupForm: FormGroup
  constructor(
    private _builder: FormBuilder,
    private _servicio: ServiceService
  ) {
   }

  ngOnInit(): void {
    this.signupForm = this._builder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['',Validators.required],
      genero: ['',Validators.required],
      dia: ['',Validators.required],
      mes: ['',Validators.required],
      year: ['',Validators.required],
      telefono: ['',Validators.required],
      correo: ['',Validators.email],
      nombreUsuario: ['',Validators.required],
      contrasena1: ['',Validators.required],
      contrasena2: ['',Validators.required],
      contrasena: [''],
      fechaUp: [''],
      rolUsuario: ['2']
    })
  }

  enviarUser(values){
    var fecha = new Date();
    if(values.contrasena1 == values.contrasena2){
      values.contrasena = btoa(values.contrasena1);
      values.fechaUp = fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay();
      this._servicio.login(values).subscribe(response => {
        console.log("El server Response");
      })
    } else{
      console.log("contraseñas diferentes");
    }
    console.log(values);
  }

}
