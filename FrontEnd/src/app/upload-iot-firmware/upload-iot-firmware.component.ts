import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadIotFirmware} from '../model/model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServicesService } from './services.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';

const UPVOTE_POST = gql`

mutation addDetailC($Name:String! ,$ServerIP:String!,$UserName:String!,$Password:String!,$FileSize:Int!,$FilePath:String!,$Port:Int!,$InsertUTC:String!,$UpdateUTC:String!,$IsActive:Boolean!,$ReleaseNotes:String!,$IsFirmware:Boolean!,$isSNM476:Boolean!){
  addDetailC(Name: $Name,ServerIP: $ServerIP,UserName: $UserName,Password: $Password,FileSize: $FileSize,FilePath: $FilePath,Port: $Port,InsertUTC: $InsertUTC,UpdateUTC: $UpdateUTC,IsActive: $IsActive,ReleaseNotes: $ReleaseNotes,IsFirmware: $IsFirmware,isSNM476: $isSNM476){
    Name
    ServerIP
    UserName
    Password
    FileSize
    FilePath
    Port
    InsertUTC
    UpdateUTC
    IsActive
    ReleaseNotes
    IsFirmware
    isSNM476
  }
}
`;

@Component({
  selector: 'app-upload-iot-firmware',
  templateUrl: './upload-iot-firmware.component.html',
  styleUrls: ['./upload-iot-firmware.component.css']
})
export class UploadIotFirmwareComponent implements OnInit {

 uploadIot:UploadIotFirmware;
 public file : File;
 fileToUpload: File;
 filename
  constructor(private router:Router,private apollo: Apollo, private http: HttpClient,private ServicesService: ServicesService,private _snackBar: MatSnackBar  ) { }

  ngOnInit(): void {
    this.uploadIot={
      versionName: '',
      fileName:'',
      Type:''
    }
  }
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    this.filename =  this.fileToUpload.name
    if(this.fileToUpload == null){
      alert("File not uploaded")
    }
    else{
     
      let formData:FormData = new FormData(); 
      formData.append('file', this.fileToUpload); 
      formData.append('folder', '/otap/otap_usr/OTAP');
      this.ServicesService.uploadFirmware(formData).pipe().subscribe(data =>
      {
        this._snackBar.open( data ,"",{duration: 2000});
    
        if(data == "file uploaded.")
        this.postData();
       
      },
     
      )
    // this.http.post(`${environment._firmwareFileUpload}`,formData).pipe().subscribe((val)=>{
    //   console.log(val)
    // })
     }
  }  

  postData(){
    this.apollo.mutate({
      mutation: UPVOTE_POST,
      variables: 
      {
        Name:this.filename,
        ServerIP:"1.1.1.1",
        UserName:"osguploadfw",
        Password:"wUAJ6W7t394m",
        FileSize:20,
        FilePath:"/osg/",
        Port:80,
        InsertUTC:"2021-05-14",
        UpdateUTC:"2021-05-18",
        IsActive:true,
        ReleaseNotes:"20",
        IsFirmware:true,
        isSNM476:true
      }
    }).subscribe(({data }) => {
      this._snackBar.open("Value Uploaded Successfully","",{duration: 2000});
    },
    (error) => this._snackBar.open("DeviceID Not Found","",{duration: 2000})
    )
  }
  
  public onClicking()
  {
   
    

  }

  
 

  public reset(accountForm: NgForm){

    accountForm.resetForm();
   
  }

  dash(){
    this.router.navigate(['Firmware']);
  }
}
