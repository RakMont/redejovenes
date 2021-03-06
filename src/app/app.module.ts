import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule}from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import{MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

//import { Hero } from './hero';
//import * as THREE from 'three'
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule}from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ShowHistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historiaVidaTexto/show-historia-vida-texto/show-historia-vida-texto.component';
import { EditHistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';
import { AddHistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historiaVidaTexto/add-historia-vida-texto/add-historia-vida-texto.component';
import { AddHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/add-historia-vida-audio/add-historia-vida-audio.component';
import { EditHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/edit-historia-vida-audio/edit-historia-vida-audio.component';
import { ShowHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
import { EditHistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';
import { AddHistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historiaVidaVideo/add-historia-vida-video/add-historia-vida-video.component';
import { ShowHistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historiaVidaVideo/show-historia-vida-video/show-historia-vida-video.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";

import {MisionService} from './services/mision.service';
import {HistoriaVidaTextoService} from './services/historia-vida-texto.service';
import {HistoriaVidaVideoService}from './services/historia-vida-video.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VerMisionComponent } from './components/mision/ver-mision/ver-mision.component';
import { EditMisionComponent } from './components/mision/edit-mision/edit-mision.component';
import { VerVisionComponent } from './components/vision/ver-vision/ver-vision.component';
import { EditVisionComponent } from './components/vision/edit-vision/edit-vision.component';
import { VerObjetivoComponent } from './components/objetivo/ver-objetivo/ver-objetivo.component';
import { EditObjetivoComponent } from './components/objetivo/edit-objetivo/edit-objetivo.component';
import { HomeComponent } from './components/home/home.component';
import { ShowConvenioComponent } from './components/convenio/show-convenio/show-convenio.component';
import { EditConvenioComponent } from './components/convenio/edit-convenio/edit-convenio.component';
import { ShowContactanosComponent } from './components/contactanos/show-contactanos/show-contactanos.component';
import { AddConvenioComponent } from './components/convenio/add-convenio/add-convenio.component';
import { AddTrabajoComponent } from './components/referente/trabajo/add-trabajo/add-trabajo.component';
import { EditTrabajoComponent } from './components/referente/trabajo/edit-trabajo/edit-trabajo.component';
import { ShowTrabajoComponent } from './components/referente/trabajo/show-trabajo/show-trabajo.component';
import { AddEducacionComponent } from './components/referente/educacion/add-educacion/add-educacion.component';
import { EditEducacionComponent } from './components/referente/educacion/edit-educacion/edit-educacion.component';
import { ShowEducacionComponent } from './components/referente/educacion/show-educacion/show-educacion.component';
import { AddSaludComponent } from './components/referente/salud/add-salud/add-salud.component';
import { EditSaludComponent } from './components/referente/salud/edit-salud/edit-salud.component';
import { ShowSaludComponent } from './components/referente/salud/show-salud/show-salud.component';
import { AddViviendaComponent } from './components/referente/vivienda/add-vivienda/add-vivienda.component';
import { EditViviendaComponent } from './components/referente/vivienda/edit-vivienda/edit-vivienda.component';
import { ShowViviendaComponent } from './components/referente/vivienda/show-vivienda/show-vivienda.component';
import { AddPodcastComponent } from './components/podcast/add-podcast/add-podcast.component';
import { EditPodcastComponent } from './components/podcast/edit-podcast/edit-podcast.component';
import { ShowPodcastComponent } from './components/podcast/show-podcast/show-podcast.component';
import { AddToTrabajoComponent } from './components/te_ofrecemos/to_trabajo/add-to-trabajo/add-to-trabajo.component';
import { EditToTrabajoComponent } from './components/te_ofrecemos/to_trabajo/edit-to-trabajo/edit-to-trabajo.component';
import { ShowToTrabajoComponent } from './components/te_ofrecemos/to_trabajo/show-to-trabajo/show-to-trabajo.component';
import { AddToBecaComponent } from './components/te_ofrecemos/to_beca/add-to-beca/add-to-beca.component';
import { EditToBecaComponent } from './components/te_ofrecemos/to_beca/edit-to-beca/edit-to-beca.component';
import { ShowToBecaComponent } from './components/te_ofrecemos/to_beca/show-to-beca/show-to-beca.component';
import { AddToViviendaComponent } from './components/te_ofrecemos/to_vivienda/add-to-vivienda/add-to-vivienda.component';
import { EditToViviendaComponent } from './components/te_ofrecemos/to_vivienda/edit-to-vivienda/edit-to-vivienda.component';
import { ShowToViviendaComponent } from './components/te_ofrecemos/to_vivienda/show-to-vivienda/show-to-vivienda.component';
import { ShowEventosComponent } from './components/eventos/show-eventos/show-eventos.component';
import { ShowTemaComponent } from './components/tema/show-tema/show-tema.component';
import { CreateTemaComponent } from './components/tema/create-tema/create-tema.component';
import { UpdateTemaComponent } from './components/tema/update-tema/update-tema.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { HistoriaVidaAudioService } from './services/historia-vida-audio.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Home2Component } from './components/home2/home2.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { AddComentarioTrabajoComponent } from './components/comentario/trabajo/add-comentario-trabajo/add-comentario-trabajo.component';
import { EditComentarioTrabajoComponent } from './components/comentario/trabajo/edit-comentario-trabajo/edit-comentario-trabajo.component';
import { ShowComentarioTrabajoComponent } from './components/comentario/trabajo/show-comentario-trabajo/show-comentario-trabajo.component';
import { ShowComentarioViviendaComponent } from './components/comentario/vivienda/show-comentario-vivienda/show-comentario-vivienda.component';
import { AddComentarioViviendaComponent } from './components/comentario/vivienda/add-comentario-vivienda/add-comentario-vivienda.component';
import { EditComentarioViviendaComponent } from './components/comentario/vivienda/edit-comentario-vivienda/edit-comentario-vivienda.component';
import { EditComentarioEducacionComponent } from './components/comentario/educacion/edit-comentario-educacion/edit-comentario-educacion.component';
import { AddComentarioEducacionComponent } from './components/comentario/educacion/add-comentario-educacion/add-comentario-educacion.component';
import { ShowComentarioEducacionComponent } from './components/comentario/educacion/show-comentario-educacion/show-comentario-educacion.component';
import { ShowComentarioSaludComponent } from './components/comentario/salud/show-comentario-salud/show-comentario-salud.component';
import { AddComentarioSaludComponent } from './components/comentario/salud/add-comentario-salud/add-comentario-salud.component';
import { EditComentarioSaludComponent } from './components/comentario/salud/edit-comentario-salud/edit-comentario-salud.component';
import { RegisterModeratorComponent } from './components/register-moderator/register-moderator.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { ShowAllUsersComponent } from './components/admin/show-all-users/show-all-users.component';
import { ShowmoderatorComponent } from './components/admin/showmoderator/showmoderator.component';
import { AddcomentarioComponent } from './components/comentario/addcomentario/addcomentario.component';
import { EditperfilComponent } from './components/user/editperfil/editperfil.component';

import{MatMenuModule} from '@angular/material/menu';
import{MatSlideToggleModule}from '@angular/material/slide-toggle';

import { MatGridListResponsiveModule } from '../lib/mat-grid-list-responsive/mat-grid-list-responsive.module';
import { Addlev2comentarytrabajoComponent } from './components/comentario/trabajo/addlev2comentarytrabajo/addlev2comentarytrabajo.component';
import { Addlev2comentarysaludComponent } from './components/comentario/salud/addlev2comentarysalud/addlev2comentarysalud.component';
import { Addlev2comentaryeducacionComponent } from './components/comentario/educacion/addlev2comentaryeducacion/addlev2comentaryeducacion.component';
import { Addlev2comentaryviviendaComponent } from './components/comentario/vivienda/addlev2comentaryvivienda/addlev2comentaryvivienda.component';
import { EditprofileasmoderComponent } from './components/user/editprofileasmoder/editprofileasmoder.component';
import { EditprofileasadminComponent } from './components/user/editprofileasadmin/editprofileasadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHistoriaVidaTextoComponent,
    EditHistoriaVidaTextoComponent,
    AddHistoriaVidaTextoComponent,
    AddHistoriaVidaAudioComponent,
    EditHistoriaVidaAudioComponent,
    ShowHistoriaVidaAudioComponent,
    EditHistoriaVidaVideoComponent,
    AddHistoriaVidaVideoComponent,
    ShowHistoriaVidaVideoComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    VerMisionComponent,
    EditMisionComponent,
    VerVisionComponent,
    EditVisionComponent,
    VerObjetivoComponent,
    EditObjetivoComponent,
    HomeComponent,
    ShowConvenioComponent,
    EditConvenioComponent,
    ShowContactanosComponent,
    AddConvenioComponent,
    AddTrabajoComponent,
    EditTrabajoComponent,
    ShowTrabajoComponent,
    AddEducacionComponent,
    EditEducacionComponent,
    ShowEducacionComponent,
    AddSaludComponent,
    EditSaludComponent,
    ShowSaludComponent,
    AddViviendaComponent,
    EditViviendaComponent,
    ShowViviendaComponent,
    AddPodcastComponent,
    EditPodcastComponent,
    ShowPodcastComponent,
    AddToTrabajoComponent,
    EditToTrabajoComponent,
    ShowToTrabajoComponent,
    AddToBecaComponent,
    EditToBecaComponent,
    ShowToBecaComponent,
    AddToViviendaComponent,
    EditToViviendaComponent,
    ShowToViviendaComponent,
    ShowEventosComponent,
    ShowTemaComponent,
    CreateTemaComponent,
    UpdateTemaComponent,
    QuienesSomosComponent,
    LoginComponent,
    SignupComponent,
    Home2Component,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddComentarioTrabajoComponent,
    EditComentarioTrabajoComponent,
    ShowComentarioTrabajoComponent,
    ShowComentarioViviendaComponent,
    AddComentarioViviendaComponent,
    EditComentarioViviendaComponent,
    EditComentarioEducacionComponent,
    AddComentarioEducacionComponent,
    ShowComentarioEducacionComponent,
    ShowComentarioSaludComponent,
    AddComentarioSaludComponent,
    EditComentarioSaludComponent,
    RegisterModeratorComponent,
    EditProfileComponent,
    ShowAllUsersComponent,
    ShowmoderatorComponent,
    AddcomentarioComponent,
    EditperfilComponent,
    Addlev2comentarytrabajoComponent,
    Addlev2comentarysaludComponent,
    Addlev2comentaryeducacionComponent,
    Addlev2comentaryviviendaComponent,
    EditprofileasmoderComponent,
    EditprofileasadminComponent,




  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    BrowserModule,
    NgxYoutubePlayerModule,
    MatGridListModule,
    NgxAudioPlayerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListResponsiveModule,



  ],
  providers: [HistoriaVidaTextoService,HistoriaVidaVideoService,HistoriaVidaAudioService],
  bootstrap: [AppComponent],
  entryComponents:[AddHistoriaVidaTextoComponent,EditHistoriaVidaTextoComponent]
})
export class AppModule { }
