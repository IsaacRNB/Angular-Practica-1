import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RenglonComponent } from './components/renglon/renglon.component';
import { UsuarioModule } from './components/usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    RenglonComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
