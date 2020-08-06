import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-pelea-apuesta',
  templateUrl: './pelea-apuesta.component.html',
  styleUrls: ['./pelea-apuesta.component.css']
})
export class PeleaApuestaComponent implements OnInit {

  constructor(
    private router: Router,
    private _ActiveRoute: ActivatedRoute,
    private _servicio: ServiceService
  ) { 
    var id=this._ActiveRoute.snapshot.paramMap.get('id');
    this.cargarApuestasId(id);
  }
  //////////////////////////////////////////////////////////
  localStorageUserNombre = "";
  localStorageUserId = "";
  info = {
    imgV:"",
    imgR:"",
    pelea:"",
    hora:"",
    favoritoVerde:"",
    favoritoRojo:"",
    pago:""
  };
  apuestaV = {
    mil:"",
    dosMil:"",
    tresMil:"",
    cuatroMil:"",
    sincoMil:"",
    otra:""
  };
  apuestaR = {
    mil:"",
    dosMil:"",
    tresMil:"",
    cuatroMil:"",
    sincoMil:"",
    otra:""
  };
  //////////////////////////////////////////////////////////
  ngOnInit(): void {    
    this.localStorageUserNombre = JSON.parse(sessionStorage.getItem('usuarioNombre'));
    this.localStorageUserId = JSON.parse(sessionStorage.getItem('usuarioId'));    
    if(this.localStorageUserNombre == null || this.localStorageUserId == null ) {
      this.router.navigate(['login/']);
    } else{
      console.log("lalos");
    }
  }

  cargarApuestasId(id){
    this._servicio.apuestasJoinId(id).subscribe(data =>{
      //llenando info object
      //console.log(JSON.stringify(data, null, 4));
      console.log(data);
      this.info.pelea = data[0].nombreVerde + " VS " + data[0].nombreRojo;
      this.info.hora = String(data[0].hora);
      this.info.favoritoVerde = String(data[0].favoritoVerde);  
      this.info.favoritoRojo = String(data[0].favoritoRojo);
      this.info.pago = String(data[0].pago);
      this.info.imgV = String(data[0].imgV);   
      this.info.imgR = String(data[0].imgR);    
      //llenando apuestaV object
      this.apuestaV.mil = String(data[0].mil);
      this.apuestaV.dosMil = String(data[0].dosMil);
      this.apuestaV.tresMil = String(data[0].tresMil);
      this.apuestaV.cuatroMil = String(data[0].cuatroMil);
      this.apuestaV.sincoMil = String(data[0].cincoMil);
      this.apuestaV.otra = String(data[0].otra);
      //llenando apuestaR object
      this.apuestaR.mil = String(data[1].mil);
      this.apuestaR.dosMil = String(data[1].dosMil);
      this.apuestaR.tresMil = String(data[1].tresMil);
      this.apuestaR.cuatroMil = String(data[1].cuatroMil);
      this.apuestaR.sincoMil = String(data[1].cincoMil);
      this.apuestaR.otra = String(data[1].otra);
    })

    console.log(this.info);
    console.log(this.apuestaV);
    console.log(this.apuestaR);
  }

}
