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
import{ShowHistoriaVidaAudioComponent}from './components/historiasVida/historia-vida-audio/historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
///////CONTACTANOS
import{ShowContactanosComponent} from './components/contactanos/show-contactanos/show-contactanos.component';
///////CONVENIOS
import{ShowConvenioComponent} from './components/convenio/show-convenio/show-convenio.component';
///////REFERENTES
import{ShowEducacionComponent} from './components/referente/educacion/show-educacion/show-educacion.component';
import{ShowSaludComponent} from './components/referente/salud/show-salud/show-salud.component';
import{ShowTrabajoComponent} from './components/referente/trabajo/show-trabajo/show-trabajo.component';
import{ShowViviendaComponent} from './components/referente/vivienda/show-vivienda/show-vivienda.component';
////////PODCAST
import{ShowPodcastComponent} from './components/podcast/show-podcast/show-podcast.component';
////////TE OFECEMOS
import{ShowToTrabajoComponent}from './components/te_ofrecemos/to_trabajo/show-to-trabajo/show-to-trabajo.component';
import{ShowToBecaComponent}from './components/te_ofrecemos/to_beca/show-to-beca/show-to-beca.component';
import{ShowToViviendaComponent}from './components/te_ofrecemos/to_vivienda/show-to-vivienda/show-to-vivienda.component';

import{ShowEventosComponent}from './components/eventos/show-eventos/show-eventos.component';
import{QuienesSomosComponent}from './components/quienes-somos/quienes-somos.component';

import{ShowTemaComponent}from './components/tema/show-tema/show-tema.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'edit_mision', component:EditMisionComponent},
  {path: 'edit_vision', component:EditVisionComponent},
  {path: 'edit_objetivos', component:EditObjetivoComponent},
  {path: 'showHVT', component:ShowHistoriaVidaTextoComponent},
  {path: 'editHVT', component:EditHistoriaVidaTextoComponent},
  {path: 'showHVV', component:ShowHistoriaVidaVideoComponent},
  {path: 'editHVV', component:EditHistoriaVidaVideoComponent},
  {path: 'showHVA', component:ShowHistoriaVidaAudioComponent},
  {path: 'showContactanos', component:ShowContactanosComponent},
  {path: 'showConvenios', component:ShowConvenioComponent},
  {path: 'showRefEducacion', component:ShowEducacionComponent},
  {path: 'showRefSalud', component:ShowSaludComponent},
  {path: 'showRefTrabajo', component:ShowTrabajoComponent},
  {path: 'showRefVivienda', component:ShowViviendaComponent},
  {path: 'showPodcast', component:ShowPodcastComponent},
  {path: 'showToTrabajo', component:ShowToTrabajoComponent},
  {path: 'showToBeca', component:ShowToBecaComponent},
  {path: 'showToVivienda', component:ShowToViviendaComponent},
  {path: 'showQuienesSomos', component:QuienesSomosComponent},
  {path: 'temas', component:ShowTemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
