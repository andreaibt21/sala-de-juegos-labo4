import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreguntadosComponent } from './preguntados.component';


const routes: Routes = [{ path: '', component: PreguntadosComponent, children: []  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntadosRoutingModule { }
