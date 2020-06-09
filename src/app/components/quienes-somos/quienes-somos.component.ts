import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  images=[];
  constructor() { }

  ngOnInit(): void {
    this.images[1]="../../assets/img-1.jpg"
    this.images[2]="../../assets/img-2.jpg"
    this.images[3]="../../assets/img-3.jpg"
    this.images[4]="../../assets/img-4.jpg"
    this.images[5]="../../assets/img-5.jpg"
    this.images[6]="../../assets/img-6.jpg"
  }

}
