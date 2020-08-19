import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './servicio/user.service';
import { AppRoutingModule } from '../app-routing.module';
import { MinusConvertionPipe } from './pipes/minus-convertion.pipe';


@NgModule({
  declarations: [
    MenuComponent,
    MinusConvertionPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    MinusConvertionPipe,
  ],
  providers: [
    UserService
  ]
})
export class SharedModule { }
