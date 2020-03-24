import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule}from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import{MatDialogModule} from '@angular/material/dialog';

import {MatSnackBarModule}from '@angular/material/snack-bar';

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
    HomeComponent


  ],
  imports: [
    BrowserModule,
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
    MatSnackBarModule
  ],
  providers: [HistoriaVidaTextoService,HistoriaVidaVideoService],
  bootstrap: [AppComponent],
  entryComponents:[AddHistoriaVidaTextoComponent,EditHistoriaVidaTextoComponent]
})
export class AppModule { }
