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

  /*posturaGuardar = {
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
  }*/
  posturaGuardar1 = {
    id_tb_posturas1: "",//
    id_apuesta: "",//
    id_usuario_V: "",//
    nombre_V:"",
    color_Apuesta_Verde: "",//
    monto_V: "",//
    id_usuario_R: "",
    nombre_R:"",
    color_Apuesta_Rojo: "",
    monto_R: "",
    fecha:""
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
      this.apuestaR.mil = String(data[0].milRojo);
      this.apuestaR.dosMil = String(data[0].dMilRojo);
      this.apuestaR.tresMil = String(data[0].tMilRojo);
      this.apuestaR.cuatroMil = String(data[0].kMilRojo);
      this.apuestaR.sincoMil = String(data[0].cMilRojo);
      this.apuestaR.otra = String(data[0].otra);
      //llenando apuestaR object
      this.apuestaV.mil = String(data[0].milVerde);
      this.apuestaV.dosMil = String(data[0].dMilVerde);
      this.apuestaV.tresMil = String(data[0].tMilVerde);
      this.apuestaV.cuatroMil = String(data[0].kMilVerde);
      this.apuestaV.sincoMil = String(data[0].cMilVerde);
      this.apuestaV.otra = String(data[0].otra);
      console.log(data);
    })
    console.log(this.apuestaR);
  }
//De aqui corte
  milVerde(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V=this.localStorageUserId,
    this.posturaGuardar1.nombre_V=this.localStorageUserNombre,
    this.posturaGuardar1.color_Apuesta_Verde="verde",
    this.posturaGuardar1.monto_V="1000",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R="",
    this.posturaGuardar1.color_Apuesta_Rojo="0",
    this.posturaGuardar1.monto_R="",
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePostura(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  dMilVerde(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V=this.localStorageUserId,
    this.posturaGuardar1.nombre_V=this.localStorageUserNombre,
    this.posturaGuardar1.color_Apuesta_Verde="verde",
    this.posturaGuardar1.monto_V="2000",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R="",
    this.posturaGuardar1.nombre_R="",
    this.posturaGuardar1.color_Apuesta_Rojo="0",
    this.posturaGuardar1.monto_R="",
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePostura(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  tMilVerde(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Verde="verde",
    this.posturaGuardar1.monto_V="3000",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R="",
    this.posturaGuardar1.color_Apuesta_Rojo="0",
    this.posturaGuardar1.monto_R="",
    this.posturaGuardar1.nombre_V=this.localStorageUserNombre,
    this.posturaGuardar1.nombre_R="",
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePostura(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  kMilVerde(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Verde="verde",
    this.posturaGuardar1.monto_V="4000",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R="",
    this.posturaGuardar1.color_Apuesta_Rojo="0",
    this.posturaGuardar1.monto_R="",
    this.posturaGuardar1.nombre_V=this.localStorageUserNombre,
    this.posturaGuardar1.nombre_R="",
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePostura(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  cMilVerde(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Verde="verde",
    this.posturaGuardar1.monto_V="5000",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R="",
    this.posturaGuardar1.color_Apuesta_Rojo="0",
    this.posturaGuardar1.monto_R="",
    this.posturaGuardar1.nombre_V=this.localStorageUserNombre,
    this.posturaGuardar1.nombre_R="",
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePostura(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  milRojo(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V="",
    this.posturaGuardar1.color_Apuesta_Verde="0",
    this.posturaGuardar1.monto_V="",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Rojo="rojo",
    this.posturaGuardar1.monto_R="1000",
    this.posturaGuardar1.nombre_V="",
    this.posturaGuardar1.nombre_R=this.localStorageUserNombre,
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePosturaRoja(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  dMilRojo(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V="",
    this.posturaGuardar1.color_Apuesta_Verde="0",
    this.posturaGuardar1.monto_V="",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Rojo="rojo",
    this.posturaGuardar1.monto_R="2000",
    this.posturaGuardar1.nombre_V="",
    this.posturaGuardar1.nombre_R=this.localStorageUserNombre,
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePosturaRoja(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  tMilRojo(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V="",
    this.posturaGuardar1.color_Apuesta_Verde="0",
    this.posturaGuardar1.monto_V="",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Rojo="rojo",
    this.posturaGuardar1.monto_R="3000",
    this.posturaGuardar1.nombre_V="",
    this.posturaGuardar1.nombre_R=this.localStorageUserNombre,
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePosturaRoja(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  kMilRojo(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V="",
    this.posturaGuardar1.color_Apuesta_Verde="0",
    this.posturaGuardar1.monto_V="",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Rojo="rojo",
    this.posturaGuardar1.monto_R="4000",
    this.posturaGuardar1.nombre_V="",
    this.posturaGuardar1.nombre_R=this.localStorageUserNombre,
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePosturaRoja(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }


  cMilRojo(){
    var fecha = new Date();
    this.posturaGuardar1.id_tb_posturas1="";
    this.posturaGuardar1.id_usuario_V="",
    this.posturaGuardar1.color_Apuesta_Verde="0",
    this.posturaGuardar1.monto_V="",
    this.posturaGuardar1.id_apuesta=this.id,
    this.posturaGuardar1.id_usuario_R=this.localStorageUserId,
    this.posturaGuardar1.color_Apuesta_Rojo="rojo",
    this.posturaGuardar1.monto_R="5000",
    this.posturaGuardar1.nombre_V="",
    this.posturaGuardar1.nombre_R=this.localStorageUserNombre,
    this.posturaGuardar1.fecha=fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDay()+" "+fecha.getHours()+"-"+fecha.getMinutes()+":"+fecha.getSeconds();
    this._servicio.savePosturaRoja(this.posturaGuardar1).subscribe(response => {
    console.log("El server Response" + response);
    })
    window.location.reload();
  }
  }

