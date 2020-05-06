import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{HistoriaVidaAudioService}from 'src/app/services/historia-vida-audio.service';
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
  selector: 'app-add-historia-vida-audio',
  templateUrl: './add-historia-vida-audio.component.html',
  styleUrls: ['./add-historia-vida-audio.component.css']
})
export class AddHistoriaVidaAudioComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<AddHistoriaVidaAudioComponent>,public service:HistoriaVidaAudioService)
  {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
  }
   listData:MatTableDataSource<any>;
   //showHistory:ShowHistoriaVidaAudioComponent;
  public hvaAudio: any=File;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
  // variable : ViewChild(MyChildComponent)
  // @ViewChild(ShowHistoriaVidaAudioComponent,{static:true})variable:ShowHistoriaVidaAudioComponent;
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
      id_HVA:0,
      titulo:'',
      fecha:new Date,
      archivo_mp3:''

    }
 }
    onSubmit(form:NgForm){
      //console.log(form.value);
      const audio = form.value;
      const formData=new FormData;
      formData.append('audio',JSON.stringify(audio));
      formData.append('file',this.hvaAudio);
      this.service.saveAudio(formData).subscribe((res)=>{
        this.resetForm(form);
        this.dialogbox.close();
        this.charge();

      this.service.filter("Register click");
        this.snackBar.open('Añadido correctamente','',{
          duration:5000,
          verticalPosition:'top'
      });
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
      .getHVA().subscribe(data=>{
        this.listData= new MatTableDataSource(data);
        this.listData.sort=this.sort;
      });
    }

}
