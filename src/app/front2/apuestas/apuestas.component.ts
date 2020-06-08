import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css','../../../assets/front1/css/general.css']
})
export class ApuestasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sumaApuesta1R=0;
  sumaApuesta1L=0;
  sumaApuesta2R=0;
  sumaApuesta2L=0;
  
  apuesta1R(){
    this.sumaApuesta1R +=1;
    return this.sumaApuesta1R;
  }

  apuesta1L(){
    this.sumaApuesta1L +=1;
    return this.sumaApuesta1L;
  }

  apuesta2R(){
    this.sumaApuesta2R +=1;
    return this.sumaApuesta2R;

  }

  apuesta2L(){
    this.sumaApuesta2L +=1;
    return this.sumaApuesta2L;
  }

}
