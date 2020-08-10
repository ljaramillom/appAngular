import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'interpolacion', component: InterpolacionComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'comunicacion', component: ComunicacionComponent },
  { path: 'servicios', component: ServiciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
