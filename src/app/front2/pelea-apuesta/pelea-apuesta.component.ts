import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pelea-apuesta',
  templateUrl: './pelea-apuesta.component.html',
  styleUrls: ['./pelea-apuesta.component.css']
})
export class PeleaApuestaComponent implements OnInit {

  signupForm: FormGroup
  constructor(
    private router: Router,
    private _ActiveRoute: ActivatedRoute,
    private _servicio: ServiceService
  ) { 
  }
  //////////////////////////////////////////////////////////
  localStorageUserNombre = "";
  localStorageUserId = "";
  id="";
  info = {
    imgV:"",
    imgR:"",
    nombreVerde:"",
    nombreRojo:"",
    pelea:"",
    hora:"",
    favoritoVerde:"",
    favoritoRojo:"",
    pago:""
  };
  apuestaV = {
    mil:"0",
    dosMil:"0",
    tresMil:"0",
    cuatroMil:"0",
    sincoMil:"0",
    otra:"0"
  };
  apuestaR = {
    mil:"0",
    dosMil:"0",
    tresMil:"0",
    cuatroMil:"0",
    sincoMil:"0",
    otra:"0"
  };

  posturaGuardar = {  
  id:"",
  id_usuario:"",
  id_apuesta:"",
  apuesta_color:"",
  cantidadMil:0,
  cantidadDosMil:0,
  cantidadTresMil:0,
  cantidadCuatroMil:0,
  cantidadCincoMil:0,
  cantidadOtra:0,
  hora_hizo_postura:"",
  cerrado:0
  }
  //////////////////////////////////////////////////////////
  ngOnInit(): void {    
    this.localStorageUserNombre = JSON.parse(sessionStorage.getItem('usuarioNombre'));
    this.localStorageUserId = JSON.parse(sessionStorage.getItem('usuarioId'));    
    if(this.localStorageUserNombre == null || this.localStorageUserId == null ) {
      this.router.navigate(['login/']);
    } else{
      this.id=this._ActiveRoute.snapshot.paramMap.get('id');
      this.cargarApuestasId(this.id);
    }
  }

  cargarApuestasId(id){
    this._servicio.apuestasJoinId(id).subscribe(data =>{
      //llenando info object
      //console.log(JSON.stringify(data, null, 4));
      this.info.pelea = data[0].nombreVerde + " VS " + data[0].nombreRojo;
      this.info.nombreVerde = data[0].nombreVerde;
      this.info.nombreRojo = data[0].nombreRojo;
      this.info.hora = String(data[0].hora);
      this.info.favoritoVerde = String(data[0].favoritoVerde);  
      this.info.favoritoRojo = String(data[0].favoritoRojo);
      this.info.pago = String(data[0].pago);
      this.info.imgV = String(data[0].imgV);   
      this.info.imgR = String(data[0].imgR);    
      //llenando apuestaV object
      this.apuestaR.mil = String(data[0].mil);
      this.apuestaR.dosMil = String(data[0].dosMil);
      this.apuestaR.tresMil = String(data[0].tresMil);
      this.apuestaR.cuatroMil = String(data[0].cuatroMil);
      this.apuestaR.sincoMil = String(data[0].sincoMil);
      this.apuestaR.otra = String(data[0].otra);
      //llenando apuestaR object
      this.apuestaV.mil = String(data[1].mil);
      this.apuestaV.dosMil = String(data[1].dosMil);
      this.apuestaV.tresMil = String(data[1].tresMil);
      this.apuestaV.cuatroMil = String(data[1].cuatroMil);
      this.apuestaV.sincoMil = String(data[1].sincoMil);
      this.apuestaV.otra = String(data[1].otra);
    })
    console.log(this.apuestaR);
  }

  milVerde(){
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="verde",
    this.posturaGuardar.cantidadMil=1,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  dMilVerde(){    
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="verde",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=1,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  tMilVerde(){
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="verde",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=1,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  kMilVerde(){
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="verde",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=1,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  cMilVerde(){    
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="verde",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=1,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  milRojo(){
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="rojo",
    this.posturaGuardar.cantidadMil=1,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  dMilRojo(){    
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="rojo",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=1,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  tMilRojo(){    
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="rojo",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=1,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  kMilRojo(){    
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="rojo",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=1,
    this.posturaGuardar.cantidadCincoMil=0,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  cMilRojo(){    
    var fecha = new Date();
    this.posturaGuardar.id="",
    this.posturaGuardar.id_usuario=this.localStorageUserId,
    this.posturaGuardar.id_apuesta=this.id,
    this.posturaGuardar.apuesta_color="rojo",
    this.posturaGuardar.cantidadMil=0,
    this.posturaGuardar.cantidadDosMil=0,
    this.posturaGuardar.cantidadTresMil=0,
    this.posturaGuardar.cantidadCuatroMil=0,
    this.posturaGuardar.cantidadCincoMil=1,
    this.posturaGuardar.cantidadOtra=0,
    this.posturaGuardar.hora_hizo_postura=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this.posturaGuardar.cerrado=0
    this._servicio.savePostura(this.posturaGuardar).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


}