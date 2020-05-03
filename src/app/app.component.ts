import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MisionService } from 'src/app/services/mision.service';
import { Subscriber } from 'rxjs';
import { Mision } from './models/Mision';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'frontend';
  
  HVTScreen;

  constructor(private router: Router) { }
}




