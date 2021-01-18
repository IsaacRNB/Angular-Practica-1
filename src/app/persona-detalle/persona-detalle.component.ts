import { Component, Input, Output , EventEmitter, OnInit } from '@angular/core';
import { UsuarioModule } from 'src/app/components/usuario/usuario.module'

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  @Input() usuario: any = null;
  @Output() cerrar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  Cerrar(){
    this.cerrar.emit();
  }

  mostrar = false;

}
