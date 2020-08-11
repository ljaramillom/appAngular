import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PrimerPadreComponent } from './components/comunicacion/padre-a-hijo/primer-padre/primer-padre.component';
import { SegundoPadreComponent } from './components/comunicacion/hijo-a-padre/segundo-padre/segundo-padre.component';
import { PadreViewChildComponent } from './components/comunicacion/view-child/padre-view-child/padre-view-child.component';
import { ReactiveFormComponent } from './components/formularios/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/formularios/template-form/template-form.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent },
  { path: 'interpolacion', component: InterpolacionComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'padre-a-hijo', component: PrimerPadreComponent },
  { path: 'hijo-a-padre', component: SegundoPadreComponent },
  { path: 'padre-view-child', component: PadreViewChildComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
