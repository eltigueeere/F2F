import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css','../../../assets/front1/css/general.css']
})
export class CrearCuentaComponent implements OnInit {

  signupForm: FormGroup
  constructor(
    private _builder: FormBuilder,
    private _servicio: ServiceService,
    private router: Router
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

  telefonoRepetido = new Boolean(false);
  NombreUsuarioRepetido = new Boolean(false);

  enviarUser(values){
    var fecha = new Date();
    if(values.contrasena1 == values.contrasena2){
      values.contrasena = btoa(values.contrasena1);
      values.fechaUp = fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay();
      //checar nombre user
      this._servicio.checarNombreUser(values).subscribe(data => {
        if(data != null){
          console.log("si hay"+data);
          alert("Este nombre de usuario ya fue registrado");
        } else{
          this.NombreUsuarioRepetido = true;
          //checar telefono user
          this._servicio.checarTelefono(values).subscribe(data =>{
            if(data != null){
              console.log("si hay"+data);
              alert("Este telefono ya fue registrado");
            } else{
              this.telefonoRepetido = true;
              //Aguardar
              console.log(this.telefonoRepetido);
              console.log(this.NombreUsuarioRepetido);
              if(this.telefonoRepetido == true && this.NombreUsuarioRepetido == true ){
                console.log("Se gurdaraaaaaa");
                this._servicio.login(values).subscribe(response => {
                  console.log("El server Response" + response);
                  console.log(values);
                  })
                this.router.navigate(['login']);
              } else{
                console.log("No se guarda");
              }
            }
          }) 
        }       
      })
      
      
    } else{
      alert("Las contraseñas no coinciden");
    }
  }
}
