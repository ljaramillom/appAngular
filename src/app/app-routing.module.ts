import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PrimerPadreComponent } from './components/comunicacion/padre-a-hijo/primer-padre/primer-padre.component';
import { SegundoHijoComponent } from './components/comunicacion/hijo-a-padre/segundo-hijo/segundo-hijo.component';
import { SegundoPadreComponent } from './components/comunicacion/hijo-a-padre/segundo-padre/segundo-padre.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'interpolacion', component: InterpolacionComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'padre-a-hijo', component: PrimerPadreComponent },
  { path: 'hijo-a-padre', component: SegundoPadreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
