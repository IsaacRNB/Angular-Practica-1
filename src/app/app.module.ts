import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RenglonComponent } from './components/renglon/renglon.component';
import { UsuarioModule } from './components/usuario/usuario.module';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    RenglonComponent,
    PersonaDetalleComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
