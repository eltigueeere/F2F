import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-mis-cruces',
  templateUrl: './mis-cruces.component.html',
  styleUrls: ['./mis-cruces.component.css','../../../assets/front1/css/general.css']
})
export class MisCrucesComponent implements OnInit {

  constructor(
    private router: Router,
    private _servicio: ServiceService,
    ) { }
    
  localStorageUserNombre = "";
  localStorageUserId = "";
  creces_show={};

  ngOnInit(): void {  
    this.localStorageUserNombre = JSON.parse(sessionStorage.getItem('usuarioNombre'));
    this.localStorageUserId = JSON.parse(sessionStorage.getItem('usuarioId'));    
    if(this.localStorageUserNombre == null || this.localStorageUserId == null ) {
      this.router.navigate(['login/']);
    } else{
      this.cargarCruces();
    }

  }


  cargarCruces(){
    this._servicio.cargarCruces(this.localStorageUserId).subscribe(data =>{
      this.creces_show = data;
    })
  } 

}
