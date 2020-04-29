import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule}from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import{MatDialogModule} from '@angular/material/dialog';

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
import { HistoriaVidaTextoComponent } from './components/historiasVida/historia-vida-texto/historia-vida-texto.component';
import { AddHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/add-historia-vida-audio/add-historia-vida-audio.component';
import { EditHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/edit-historia-vida-audio/edit-historia-vida-audio.component';
import { ShowHistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
import { HistoriaVidaAudioComponent } from './components/historiasVida/historia-vida-audio/historia-vida-audio.component';
import { HistoriaVidaVideoComponent } from './components/historiasVida/historia-vida-video/historia-vida-video.component';
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
import { ShowConvenioComponent } from './components/Convenio/show-convenio/show-convenio.component';
import { EditConvenioComponent } from './components/Convenio/edit-convenio/edit-convenio.component';
import { TrabajoComponent } from './components/Referente/trabajo/trabajo.component';
import { AddContactanosComponent } from './components/Contactanos/add-contactanos/add-contactanos.component';
import { EditContactanosComponent } from './components/Contactanos/edit-contactanos/edit-contactanos.component';
import { ShowContactanosComponent } from './components/Contactanos/show-contactanos/show-contactanos.component';
import { AddConvenioComponent } from './components/Convenio/add-convenio/add-convenio.component';
import { AddTrabajoComponent } from './components/Referente/Trabajo/add-trabajo/add-trabajo.component';
import { EditTrabajoComponent } from './components/Referente/Trabajo/edit-trabajo/edit-trabajo.component';
import { ShowTrabajoComponent } from './components/Referente/Trabajo/show-trabajo/show-trabajo.component';
import { AddEducacionComponent } from './components/Referente/Educacion/add-educacion/add-educacion.component';
import { EditEducacionComponent } from './components/Referente/Educacion/edit-educacion/edit-educacion.component';
import { ShowEducacionComponent } from './components/Referente/Educacion/show-educacion/show-educacion.component';
import { AddSaludComponent } from './components/Referente/Salud/add-salud/add-salud.component';
import { EditSaludComponent } from './components/Referente/Salud/edit-salud/edit-salud.component';
import { ShowSaludComponent } from './components/Referente/Salud/show-salud/show-salud.component';
import { AddViviendaComponent } from './components/Referente/Vivienda/add-vivienda/add-vivienda.component';
import { EditViviendaComponent } from './components/Referente/Vivienda/edit-vivienda/edit-vivienda.component';
import { ShowViviendaComponent } from './components/Referente/Vivienda/show-vivienda/show-vivienda.component';
import { AddPodcastComponent } from './components/Podcast/add-podcast/add-podcast.component';
import { EditPodcastComponent } from './components/Podcast/edit-podcast/edit-podcast.component';
import { ShowPodcastComponent } from './components/Podcast/show-podcast/show-podcast.component';
import { AddToTrabajoComponent } from './components/te_ofrecemos/to_trabajo/add-to-trabajo/add-to-trabajo.component';
import { EditToTrabajoComponent } from './components/te_ofrecemos/to_trabajo/edit-to-trabajo/edit-to-trabajo.component';
import { ShowToTrabajoComponent } from './components/te_ofrecemos/to_trabajo/show-to-trabajo/show-to-trabajo.component';
import { AddToBecaComponent } from './components/te_ofrecemos/to_beca/add-to-beca/add-to-beca.component';
import { EditToBecaComponent } from './components/te_ofrecemos/to_beca/edit-to-beca/edit-to-beca.component';
import { ShowToBecaComponent } from './components/te_ofrecemos/to_beca/show-to-beca/show-to-beca.component';
import { AddToViviendaComponent } from './components/te_ofrecemos/to_vivienda/add-to-vivienda/add-to-vivienda.component';
import { EditToViviendaComponent } from './components/te_ofrecemos/to_vivienda/edit-to-vivienda/edit-to-vivienda.component';
import { ShowToViviendaComponent } from './components/te_ofrecemos/to_vivienda/show-to-vivienda/show-to-vivienda.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AddEventosComponent } from './components/eventos/add-eventos/add-eventos.component';
import { ShowEventosComponent } from './components/eventos/show-eventos/show-eventos.component';
import { EditEventosComponent } from './components/eventos/edit-eventos/edit-eventos.component';
import { ShowTemaComponent } from './components/tema/show-tema/show-tema.component';
import { CreateTemaComponent } from './components/tema/create-tema/create-tema.component';
import { UpdateTemaComponent } from './components/tema/update-tema/update-tema.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowHistoriaVidaTextoComponent,
    EditHistoriaVidaTextoComponent,
    AddHistoriaVidaTextoComponent,
    HistoriaVidaTextoComponent,
    AddHistoriaVidaAudioComponent,
    EditHistoriaVidaAudioComponent,
    ShowHistoriaVidaAudioComponent,
    HistoriaVidaAudioComponent,
    HistoriaVidaVideoComponent,
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
    TrabajoComponent,
    AddContactanosComponent,
    EditContactanosComponent,
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
    EventosComponent,
    AddEventosComponent,
    ShowEventosComponent,
    EditEventosComponent,
    ShowTemaComponent,
    CreateTemaComponent,
    UpdateTemaComponent,
    QuienesSomosComponent,



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
    NgxAudioPlayerModule

  ],
  providers: [HistoriaVidaTextoService,HistoriaVidaVideoService],
  bootstrap: [AppComponent],
  entryComponents:[AddHistoriaVidaTextoComponent,EditHistoriaVidaTextoComponent]
})
export class AppModule { }
