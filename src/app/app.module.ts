import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PrimerPadreComponent } from './components/comunicacion/padre-a-hijo/primer-padre/primer-padre.component';
import { PrimerHijoComponent } from './components/comunicacion/padre-a-hijo/primer-hijo/primer-hijo.component';
import { SegundoHijoComponent } from './components/comunicacion/hijo-a-padre/segundo-hijo/segundo-hijo.component';
import { SegundoPadreComponent } from './components/comunicacion/hijo-a-padre/segundo-padre/segundo-padre.component';
import { HijoViewChildComponent } from './components/comunicacion/view-child/hijo-view-child/hijo-view-child.component';
import { PadreViewChildComponent } from './components/comunicacion/view-child/padre-view-child/padre-view-child.component';
import { ReactiveFormComponent } from './components/formularios/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/formularios/template-form/template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    DirectivasComponent,
    ServiciosComponent,
    InicioComponent,
    MenuComponent,
    EventosComponent,
    PrimerPadreComponent,
    PrimerHijoComponent,
    SegundoHijoComponent,
    SegundoPadreComponent,
    HijoViewChildComponent,
    PadreViewChildComponent,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
