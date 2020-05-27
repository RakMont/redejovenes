import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{UsuarioService}from 'src/app/services/usuario.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import{Usuario}from 'src/app/models/Usuario';
import{AuthService}from 'src/app/services/auth.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {};
  lugar_acogida:String;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  confirmpassword = false;
  startDate = new Date(2000, 0, 1);
  date = new FormControl(new Date(2000, 0, 1));
  selectedValue: string;
   selectedCar: string;
   animalControl = new FormControl('', Validators.required);
   selectFormControl = new FormControl('', Validators.required);
  lugares=[
    "OTRO",
    "Albergue Nuestra Casa",
    "Albergue Restauración",
    "Aldeas infantiles SOS",
"Aldeas infantiles SOS - Tiquipaya",
"Arca de Jesus Centro de Rehabilitacion",
"Arca de rescate de los niños",
"Casa Ana María - Albergue",
"Casa de Amistad OBADES",
"Casa de la esperanza",
"Casa de los niños",
"Casa familiar Danilo Gotti",
"Casa Jerusalen",
"Casa Nazareth",
"Centro Camino (Adolescentes con problemas de Drogodepencias)",
"Centro de apoyo integral CAICC",
"Centro de ayuda integral a la mujer",
"Centro de día Una brisa de esperanza",
"Centro de dia Casa del Adolescente (infante)",
"Centro de día Comedor Popular OTB Itocta",
"Centro de día Comedor Popular OTB San Francisco",
"Centro de día Comedor Popular OTB Tirani",
"Centro de dia Comunidad educativa para la vida",
"Centro de dia Comunidad Montessori (infante)",
"Centro de día Miraflores",
"Centro de rehabilitación Manuela Gandarillas",
"Centro de vida Bolivia",
"Centro Gerónimo Usera",
"Centro infantil San Antonio",
"Centro Sagrado Corazón de Jesús",
"Centro Social SOS",
"CEOLI",
"Chaskalla Estrellita",
"Ciudad de los niños",
"Claudina Thevenethe",
"Comunidad terapéutica Puntiti",
"Corazón del Pastor",
"Corazon Grande",
"Creamos",
"Cristo Rey Aldea de Niños",
"El refugio",
"Familias sustitutas transitorias",
"Fundación Comshion",
"Fundación Esperanza",
"Fundación Esperanza II (Bolivian Childrens Mision)",
"Hijas de Rey",
"Hogar Arco Iris",
"Hogar de amor para niños I",
"Hogar de amor para niños II",
"Hogar de amor para niños III",
"Hogar de sueños",
"Hogar Evangelina Booth",
"Hogar San Martin - San Vicente",
"Jardin infantil Musuj Muju",
"L'esperance de Bolivia",
"La Providencia",
"Lluvia de ángeles",
"Madre de Dios",
"María Auxiliadora",
"Mision para la niñez boliviana",
"Mosoj Runitas",
"Mosoj Yan Motivación",
"Mosoj Yan trabajadoras",
"Oscar Ahlm",
"Pedacito de Cielo",
"Pequeño David",
"Programa de atencion a la mujer - infante",
"Punto de encuentro Uyurina",
"Q'anchay",
"Rijch'ari Centro cultural",
"Rosa de Saron",
"Salomón Klein",
"San José (Centro para NNA en Situación de Calle)",
"Santa Emilia",
"Sayari Warmi",
"Sayaricuy (Centro para NNA en Situación de Calle)",
"Sumaj Yachy Centro Cultural",
"Techo nocturno",
"Tiquipaya Wasi Comunidad Educativa",
"Tres Soles",
"Tutor & and art time",
"Vida Nueva",
"Villa Amistad",
"Villa infantil Nueva Esperanza",
"Villa Libertad",
"Villa Porvenir",
"Wasinchej",
"Wawasninchej",
"Zapatito"
  ]

  constructor(private router: Router,private authService: AuthService) { }
  ngOnInit() {
  }

  onSubmit() {


    console.log(this.form);
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

  }


}
