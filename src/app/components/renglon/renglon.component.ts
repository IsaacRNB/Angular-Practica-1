import { Component, OnInit } from '@angular/core';

import { UsuarioModule } from 'src/app/components/usuario/usuario.module'

@Component({
  selector: 'app-renglon',
  templateUrl: './renglon.component.html',
  styleUrls: ['./renglon.component.css']
})
export class RenglonComponent implements OnInit {

  usuarioArray: UsuarioModule[] = [
    {edad: 20, sexo: "masculino", nombre: "isaac", apellidoPaterno: "nuñez", apellidoMaterno:"bernal"},
    {edad: 24, sexo: "masculino", nombre: "ricardo", apellidoPaterno: "nuñez", apellidoMaterno:"bernal"},
    {edad: 19, sexo: "femenino", nombre: "ana", apellidoPaterno: "martinez", apellidoMaterno:"gonzalez"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
