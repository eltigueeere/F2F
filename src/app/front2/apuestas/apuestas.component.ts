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
      var apuestas = new Array(Object.keys(data).length);
      var idApuestaId = data[0].idApuesta;
      var indiceApuestas=0, mil=0, dosMil=0, tresMil=0, cuatroMil=0, cincoMil=0;
      console.log(data);
      for(var i=0; i < Object.keys(data).length; i++){
        if( idApuestaId == data[i].idApuesta ){
          if(data[i].cantidad == 1000){
            mil++;
          } else if(data[i].cantidad == 2000){
            dosMil++;
          }else if(data[i].cantidad =  3000 ){
            tresMil++;
          } else if(data[i].cantidad = 4000){
            cuatroMil++;
          } else{
            cincoMil++;
          }
          apuestas[indiceApuestas]=
          [
            data[i].apuesta_color,
            data[i].cantidad,
            data[i].favoritoRojo,
            data[i].favoritoVerde,
            data[i].hora_hizo_postura,
            data[i].id,
            data[i].idApuesta,
            data[i].id_usuario,
            data[i].nombreRojo,
            data[i].nombreVerde,
            data[i].pago,
            data[i].status,
            data[i].imgV,
            data[i].imgR,
            mil,
            dosMil,
            tresMil,
            cuatroMil,
            cincoMil
          ]
        } else{
          idApuestaId = data[i].idApuesta;
          indiceApuestas++;
        }
       
        
      }
      console.log(apuestas);
    })
  }


}
