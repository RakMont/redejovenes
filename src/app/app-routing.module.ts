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

import{SignupComponent}from './components/signup/signup.component';
import{LoginComponent}from './components/login/login.component';
import{Home2Component}from './components/home2/home2.component';
import{ProfileComponent}from './components/profile/profile.component';

import{BoardAdminComponent}from './components/board-admin/board-admin.component';

import{BoardModeratorComponent}from './components/board-moderator/board-moderator.component';

import{BoardUserComponent}from './components/board-user/board-user.component';
import{ShowComentarioEducacionComponent}from './components/comentario/educacion/show-comentario-educacion/show-comentario-educacion.component';
import{ShowComentarioTrabajoComponent}from './components/comentario/trabajo/show-comentario-trabajo/show-comentario-trabajo.component';
import{ShowComentarioViviendaComponent}from './components/comentario/vivienda/show-comentario-vivienda/show-comentario-vivienda.component';
import{ShowComentarioSaludComponent}from './components/comentario/salud/show-comentario-salud/show-comentario-salud.component';
import{RegisterModeratorComponent}from './components/register-moderator/register-moderator.component';
import{ShowAllUsersComponent}from './components/admin/show-all-users/show-all-users.component';
import{ShowmoderatorComponent}from './components/admin/showmoderator/showmoderator.component';

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
  {path: 'temas', component:ShowTemaComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'comentariosEdu', component: ShowComentarioEducacionComponent },
  { path: 'comentariosViv', component: ShowComentarioViviendaComponent },
  { path: 'comentariosTrab', component: ShowComentarioTrabajoComponent },
  { path: 'comentariosSalud', component: ShowComentarioSaludComponent },
  { path: 'registermod', component: RegisterModeratorComponent },
  { path: 'allusers', component: ShowAllUsersComponent },
  { path: 'allmoders', component: ShowmoderatorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
