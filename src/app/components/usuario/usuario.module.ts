import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { 
  edad: number;
  sexo: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
}
