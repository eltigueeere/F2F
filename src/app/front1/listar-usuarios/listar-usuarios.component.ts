import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelo/usuarios';
import { ServiceService } from '../../Service/service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  
  usuarios:Usuarios[]
  constructor( private service:ServiceService , private router:Router ){   }

  ngOnInit(): void {
  
  }
}
