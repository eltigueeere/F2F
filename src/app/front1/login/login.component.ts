import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../assets/front1/css/general.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder,
    private _servicio: ServiceService
  ) { }

  ngOnInit(): void {
    this.signupForm = this._builder.group({
    usuario: ['',Validators.required],
    contrasena: ['',Validators.required]
  })
  }

  entrar(values){
    console.log(values);
    this._servicio.entrarService(values).subscribe(data => {
      console.log(data.id);
      console.log(data.nombre);
      console.log(data.apellido);
      console.log(data.genero);
      console.log(data.dia);
      console.log(data.mes);
      console.log(data.year);
      console.log(data.telefono);
      console.log(data.correo);
      console.log(data.nombreUsuario);
      console.log(data.contrasena);
      console.log(data.fechaUp);
      console.log(data.rolUsuario);
    })
  }
}
