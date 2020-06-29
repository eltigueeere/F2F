import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css','../../../assets/front1/css/general.css']
})
export class ApuestasComponent implements OnInit {

  constructor(
    private router: Router,
    private _servicio: ServiceService
  ) { }

  
  localStorageUserNombre = "";
  localStorageUserId = "";
  apuestas={};

  ngOnInit(): void {  
    this.localStorageUserNombre = JSON.parse(sessionStorage.getItem('usuarioNombre'));
    this.localStorageUserId = JSON.parse(sessionStorage.getItem('usuarioId'));    
    if(this.localStorageUserNombre == null || this.localStorageUserId == null ) {
      this.router.navigate(['login/']);
    } else{
      this.cargarApuestas();
    }

  }

  
  cargarApuestas(){
    this._servicio.apuestasJoin().subscribe(data =>{
      console.log(data);
      this.apuestas = data;

    })
  }


}