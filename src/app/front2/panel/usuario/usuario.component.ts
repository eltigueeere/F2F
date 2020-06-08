import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css','../../../../assets/front1/css/general.css']
})
export class UsuarioComponent implements OnInit {

  @Input('usuario') data: any

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log((this._route.snapshot.paramMap.get('nombreUsuario')));
    
  }

  

}
