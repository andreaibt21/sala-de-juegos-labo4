import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MayoromenorComponent } from './mayoromenor.component';

const routes: Routes = [{ path: '', component: MayoromenorComponent, children: []  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayoromenorRoutingModule { }
