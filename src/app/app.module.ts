import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    DirectivasComponent,
    FormulariosComponent,
    ComunicacionComponent,
    ServiciosComponent,
    InicioComponent,
    MenuComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
