import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { from } from 'rxjs';
import { PrimerPadreComponent } from './components/comunicacion/padre-a-hijo/primer-padre/primer-padre.component';
import { PrimerHijoComponent } from './components/comunicacion/padre-a-hijo/primer-hijo/primer-hijo.component';
import { SegundoHijoComponent } from './components/comunicacion/hijo-a-padre/segundo-hijo/segundo-hijo.component';
import { SegundoPadreComponent } from './components/comunicacion/hijo-a-padre/segundo-padre/segundo-padre.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    DirectivasComponent,
    FormulariosComponent,
    ServiciosComponent,
    InicioComponent,
    MenuComponent,
    EventosComponent,
    PrimerPadreComponent,
    PrimerHijoComponent,
    SegundoHijoComponent,
    SegundoPadreComponent
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
