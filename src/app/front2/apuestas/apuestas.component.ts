import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css','../../../assets/front1/css/general.css']
})
export class ApuestasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  
  localStorageUserNombre = "";
  localStorageUserId = "";

  ngOnInit(): void {  
    this.localStorageUserNombre = JSON.parse(sessionStorage.getItem('usuarioNombre'));
    this.localStorageUserId = JSON.parse(sessionStorage.getItem('usuarioId'));    
    if(this.localStorageUserNombre == null || this.localStorageUserId == null ) {
      this.router.navigate(['login/']);
    }

  }


}
