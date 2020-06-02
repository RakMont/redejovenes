import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{ConvenioService}from 'src/app/services/convenio.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import{ShowHistoriaVidaAudioComponent}from 'src/app/components/historiasVida/historia-vida-audio/historiaVidaAudio/show-historia-vida-audio/show-historia-vida-audio.component';
import { Convenio } from 'src/app/models/Convenio';

@Component({
  selector: 'app-add-convenio',
  templateUrl: './add-convenio.component.html',
  styleUrls: ['./add-convenio.component.css']
})
export class AddConvenioComponent implements OnInit {
  public photos:any=[];
  convenios:Convenio[];
  things=[];
  public hvaAudio: any=File;
  public aux;
  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<AddConvenioComponent>,public service:ConvenioService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
   }
   listData:MatTableDataSource<any>;
  public imagen: any=File;

   @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.resetForm();
  }
  close(){
    this.dialogbox.close();
    }
    resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      id_convenio:0,
      institucion:'',
      descripcion:'',
      direccion:'',
      imagen:''

    }
 }


 onSubmit(form:NgForm){
  //console.log(form.value);
  const convenio = form.value;
  const formData=new FormData;
  formData.append('convenio',JSON.stringify(convenio));
  formData.append('file',this.hvaAudio);
  this.service.saveConvenioFile(formData).subscribe((res)=>{
    this.resetForm(form);
    this.dialogbox.close();
  this.service.filter("Register click");
    this.snackBar.open('Añadido correctamente','',{
      duration:5000,
      verticalPosition:'top'
  });
  })
  this.service.getConvenios().subscribe(response=>{
    this.photos=response;
  this.Convertlist();

  });
  this.service.getConv()
    .subscribe(data =>{
 this.convenios = data;
});
/*this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["showConvenios"]));*/
}
Convertlist(){
  let c: number = 0;

  for(let photo of this.photos){
    this.aux=this.convenios[c];
    this.things.push({photo:photo,imagen:this.aux.imagen,id_convenio:this.aux.id_convenio,institucion:this.aux.institucion,descripcion:this.aux.descripcion,direccion:this.aux.direccion});
    c=c+1;
  }
  window.location.reload();
}

onSelectFile(event){
//const file=event.target.file;
const file=event.target.files[0];
console.log(file);
this.hvaAudio=file;
}
charge(){
  this.service
  .getConv().subscribe(data=>{
    this.listData= new MatTableDataSource(data);
    this.listData.sort=this.sort;
  });
}
}
