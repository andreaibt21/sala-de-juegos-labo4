import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';

@NgModule({
  imports: [CommonModule, RegistroRoutingModule, FormsModule],
  exports: [RegistroComponent],
  declarations: [RegistroComponent],
  providers: [],
})
export class RegistroModule {}
