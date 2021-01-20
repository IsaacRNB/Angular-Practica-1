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
  bandera;
  ngOnInit(): void {
  }

  Cerrar(){
    this.cerrar.emit();
  }

  Ocultar()
  {
    if(this.bandera == false)
    {
      this.bandera = true;
    }
    else
    {
      this.bandera = false;
    }
  }

  mostrar = false;

}
