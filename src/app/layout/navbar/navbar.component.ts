import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../../assets/front1/css/general.css']
})
export class NavbarComponent implements OnInit {

  signupForm: FormGroup
  
  constructor(
    private _builder: FormBuilder,
    private _servicio: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.signupForm = this._builder.group({
      nombreUsuario: ['',Validators.required],
      contrasena: ['',Validators.required]
    })    
  }

  entrar(values){
    console.log(values);
    this._servicio.entrarService(values).subscribe(data => {
      console.log("En el controller data --> " + data);
      if(data != null){
        if(data.contrasena == btoa(values.contrasena)){
          if(data.rolUsuario == 2){
            this.router.navigate(['adminUsuario/'+data.nombreUsuario]);
          } else{
            console.log("Eres admin");
          }
        }else{
          alert("Contraseña incorrecta");
        }
      }else{
        alert("Usuario incorrecto.")
      }
    })
  }

}