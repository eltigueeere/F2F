import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/usuarios';
import { ServiceService } from '../../Service/service.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  
  urlGetAllUser="http://localhost:3000/usuario";
  public currentEuroRates: any = null;
  constructor( private service:ServiceService , private router:Router, private _http: HttpClient ){   }

  ngOnInit(): void {
    this.getListarUsuarios();
  }
  getListarUsuarios(){
    return this._http.get(this.urlGetAllUser).subscribe(apiData => (this.currentEuroRates = apiData));
  }
}
