import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AhorcadoComponent } from './ahorcado.component';

const routes: Routes = [{ path: '', component: AhorcadoComponent, children: []  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhorcadoRoutingModule { }
