import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMisionComponent } from './components/mision/edit-mision/edit-mision.component';
import { EditVisionComponent } from './components/vision/edit-vision/edit-vision.component';
import { EditObjetivoComponent } from './components/objetivo/edit-objetivo/edit-objetivo.component';
import {ShowHistoriaVidaTextoComponent} from './components/historiasVida/historia-vida-texto/historiaVidaTexto/show-historia-vida-texto/show-historia-vida-texto.component';
import {EditHistoriaVidaTextoComponent} from './components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';

import {ShowHistoriaVidaVideoComponent} from './components/historiasVida/historia-vida-video/historiaVidaVideo/show-historia-vida-video/show-historia-vida-video.component';
import {EditHistoriaVidaVideoComponent} from './components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';
import{HomeComponent}from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'edit_mision', component:EditMisionComponent},
  {path: 'edit_vision', component:EditVisionComponent},
  {path: 'edit_objetivos', component:EditObjetivoComponent},
  {path: 'showHVT', component:ShowHistoriaVidaTextoComponent},
  {path: 'editHVT', component:EditHistoriaVidaTextoComponent},
  {path: 'showHVV', component:ShowHistoriaVidaVideoComponent},
  {path: 'editHVV', component:EditHistoriaVidaVideoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
