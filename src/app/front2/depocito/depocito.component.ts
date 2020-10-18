import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-depocito',
  templateUrl: './depocito.component.html',
  styleUrls: ['./depocito.component.css','../../../assets/front1/css/general.css']
})
export class DepocitoComponent implements OnInit {


  signupForm: FormGroup
  referencia="";
  localStorageUserId = "";

  constructor(
    private _builder: FormBuilder,
    private _servicio: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.localStorageUserId = JSON.parse(sessionStorage.getItem('usuarioId'));  
    this.signupForm = this._builder.group({
      cantidadDepocito: ['',Validators.required]
  })
  }



  depocitoSumit(values) {
    console.log(values);
    console.log(this.referencia);
  }

  depocito(){
    let fecha = new Date();
    let aleatorio = Math.floor(Math.random()*101)+3;
    this.referencia = "F2F" + aleatorio + this.localStorageUserId +fecha.getMonth()+fecha.getDay()+fecha.getHours()+fecha.getMinutes()+fecha.getSeconds();
    return this.referencia;
  }
}
