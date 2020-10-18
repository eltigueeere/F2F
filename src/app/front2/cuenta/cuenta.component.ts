import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css','../../../assets/front1/css/general.css']
})
export class CuentaComponent implements OnInit {

  aMostrar = true;

  constructor() { }

  ngOnInit(): void {
  }

  depocito(){
    this.aMostrar = true;
  }
  
  retiro(){
    this.aMostrar = false;
  }
}
