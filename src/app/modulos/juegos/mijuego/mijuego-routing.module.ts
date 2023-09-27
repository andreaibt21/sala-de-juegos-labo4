import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MijuegoComponent } from './mijuego.component';


const routes: Routes = [{ path: '', component: MijuegoComponent, children: []  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MijuegoRoutingModule { }
