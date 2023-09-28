import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SeccionJuegosComponent } from './seccion-juegos.component';



const routes: Routes = [{ path: '', component: SeccionJuegosComponent, children: []  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionJuegosRoutingModule { }
