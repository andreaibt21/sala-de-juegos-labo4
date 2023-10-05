import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecladoComponent } from './teclado.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TecladoComponent],
  exports: [TecladoComponent],
})
export class TecladoModule { }
