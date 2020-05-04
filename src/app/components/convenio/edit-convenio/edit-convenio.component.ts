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

@Component({
  selector: 'app-edit-convenio',
  templateUrl: './edit-convenio.component.html',
  styleUrls: ['./edit-convenio.component.css']
})
export class EditConvenioComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditConvenioComponent>,public service:ConvenioService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
  }
  listData:MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public hvaAudio: any=File;
  ngOnInit(): void {
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
    const audio = form.value;
    const formData=new FormData;
    formData.append('convenio',JSON.stringify(audio));
    formData.append('file',this.hvaAudio);
    this.service.UpdateConvenioFile(formData).subscribe((res)=>{
      this.resetForm(form);
      this.dialogbox.close();
      this.charge();

      this.dialogbox.close();
      this.service.filter("Register click");
      this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
    })

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


    preview(files) {
      const mimeType = files.target;
      var reader = new FileReader();
      this.hvaAudio = mimeType;
      reader.readAsDataURL(mimeType);
      reader.onload = (_event) => {
        this.hvaAudio = reader.result;
      }
    }
}
