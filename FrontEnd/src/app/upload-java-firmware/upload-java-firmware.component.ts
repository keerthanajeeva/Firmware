import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UploadJavaFirmware } from '../model/model'
import { UploadJavaFirmwareService } from './service/upload-java-firmware.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-java-firmware',
  templateUrl: './upload-java-firmware.component.html',
  styleUrls: ['./upload-java-firmware.component.css']
})
export class UploadJavaFirmwareComponent implements OnInit {

  uploadJava:UploadJavaFirmware;
  hide = true;
  constructor(private uploadJavaFirmware: UploadJavaFirmwareService,private _snackBar: MatSnackBar ,
    private router :Router) { }

  ngOnInit(): void {
    this.uploadJava={
      Name: '',
      ServerIP: '',
      UserName: '',
      FilePath: '',
      FileSize: '',
      Password: '',
      ReleaseNote: '',
      firmwareType: '',
      filename: '',
      Port: 2222,
      IsFirmwareC: false
    }
  }

  public onClicking(accountForm: NgForm)
  {
   
    if(accountForm.valid)
    {
    this.uploadJavaFirmware.createJavaFirmware([this.uploadJava]).pipe().subscribe(data=>{
     
      if(data == true){
      
    
       this._snackBar.open("Value Uploaded Successfully","",{duration: 2000});
       this.navigation();
     //   this.router.navigate(['deviceSearch/single_device/1'])

      }
    })
    }
    else
    {
      return;
    }

  }

  navigation(){
    setTimeout(() =>{
      this.router.navigate(['deviceSearch/single_device/1'])
    },2000)
  }
  
  public reset(accountForm: NgForm){

    accountForm.resetForm();
  }

  dash(){
    this.router.navigate(['Firmware']);
  }
}
