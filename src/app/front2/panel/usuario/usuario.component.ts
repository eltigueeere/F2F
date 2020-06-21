import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css','../../../../assets/front1/css/general.css']
})
export class UsuarioComponent implements OnInit {


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
    }else{
      console.log(this.localStorageUserNombre + " <---> " + this.localStorageUserId);
    }

  }

  

}
