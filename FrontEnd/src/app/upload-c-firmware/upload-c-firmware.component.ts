import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {SingleCFirmwareUpload } from '../model/model'
import { EditFirmwareFileSize } from '../model/model';
import { UploadCFirmwareService } from './service/upload-c-firmware.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';

export type detailC ={
  ID:Number;
  Name:String;
}

export type DataQuery ={
  detailC:detailC[]
}

const UPVOTE_POST = gql`
mutation updateDetailC($ID:Int! ,$Name: String!,$FileSize: Int!){
  updateDetailC(ID: $ID,Name: $Name,FileSize: $FileSize){
    ID
    Name
    FileSize
  }
}
`;

@Component({
  selector: 'app-upload-c-firmware',
  templateUrl: './upload-c-firmware.component.html',
  styleUrls: ['./upload-c-firmware.component.scss']
})



export class UploadCFirmwareComponent implements OnInit {

 
  uploadC:SingleCFirmwareUpload;
  edit:EditFirmwareFileSize;
  ID  
  vname
  Name
  FileSize;
  
  hide = true;
  messages:detailC[];
  constructor(private uploadCFirmware: UploadCFirmwareService ,private _snackBar: MatSnackBar ,
    private router :Router,private apollo: Apollo) { }
  

  ngOnInit(): void {
 
    this.uploadC ={
      Name: '',
      ServerIP: '',
      UserName: '',
      FilePath: '',
      FileSize: '',
      Password: '',
      ReleaseNote: '',
      firmwareType: '',
      filename: '',
      Port: 21,
      IsFirmwareC: true
    }

    // this.edit={
    //   versionName:'',
    //   fileSize:''
    // }

    const source1$ = this.apollo.query<DataQuery>({
      query: gql`
      {
        detailC{
          ID
          Name
        }
      }`
      
    }).pipe(shareReplay(1))

source1$.pipe(map(result => result.data && result.data.detailC)).subscribe((data) =>   
 this.messages = data
  );
  }

  listed(version){
   
    for (const [key, value] of Object.entries(version)) {

     
      if(key == "Name"){
        this.Name = value
      }
      if(key == "ID"){
       this.ID = Number(value)
      }

    }
  }
  public onClicking(uploadCForm: NgForm)
  {
   
    if(uploadCForm.valid)
    {
    this.uploadCFirmware.createCFirmware([this.uploadC]).pipe().subscribe(data=>{
     
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
  
  public onEdit(editForm: NgForm)
  {
   
    if(editForm.valid)
    {
      this.apollo.mutate({
        mutation: UPVOTE_POST,
        variables: 
        {
          ID: this.ID,
          Name: this.Name,
          FileSize: this.FileSize
        }
      }).subscribe(({data }) => {
        this._snackBar.open("Value Updated Successfully","",{duration: 2000});
      },
      (error) => this._snackBar.open("DeviceID Not Found","",{duration: 2000})
      )
    
      
    }
    else
    {
      return;
    }

  }

  public uploadFormreset(uploadCForm: NgForm){

    uploadCForm.resetForm();
  }


  public editFormreset(editForm: NgForm){

    editForm.resetForm();
  }


  dash(){
    this.router.navigate(['Firmware']);
  }
}
