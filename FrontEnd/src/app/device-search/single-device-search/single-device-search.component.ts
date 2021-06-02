import { Component, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import {DevicesearchService} from "./service/devicesearch.service"
import { SelectionModel } from '@angular/cdk/collections';
import { __assign } from 'tslib';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';

export type detailC = {
  ID:Number;
  Name:String;
   ServerIP:String;
  UserName:String;
  Password:String;
  FileSize:Number;
  FilePath:String;
  Port:Number;
  InsertUTC:String;
  UpdateUTC:String;
  IsActive:Boolean;
  ReleaseNotes:String;
  isSNM476:Boolean;
}

export type DataQuery = {
  detailC:detailC[]
}

export type detailJava = {
  ID:Number;
  Name:String;
   ServerIP:String;
  UserName:String;
  Password:String;
  FileSize:Number;
  FilePath:String;
  Port:Number;
  InsertUTC:String;
  UpdateUTC:String;
  IsActive:Boolean;
  ReleaseNotes:String;
  isSNM476:Boolean;
}

export type DataQuery1 = {
  detailJava:detailJava[]
}

@Component({
  selector: 'app-single-device-search',
  templateUrl: './single-device-search.component.html',
  styleUrls: ['./single-device-search.component.css']
})




export class SingleDeviceSearchComponent implements OnInit , AfterViewInit , AfterContentChecked ,AfterContentInit {


  public entries: object = [];
  public entries1: object = [];
  public Versions: object = [];
  FirmwareC: object = [];
  messages:object =[]; 
  select = false;
 sample =[];
 selectedValue: string;
  public file : File;
  fileToUpload: File;
  loadingFlag = true;
  loadingFlag1 = true
  temp = null
  id
  totalCount=0;
  pageIndex=0;
  searchKey:string;
  public publishVersion: object =[];
  searchType
//displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","deviceId","deviceType","cn","Network_Provider","mobileNumber","mn2","Subcription_StartDate","Subcription_EndDate","Vehicle_Type","Vehicle_Model","ccv","cjv","ignition"]
  dataSource : MatTableDataSource<any>
  selection = new SelectionModel(false, []);


// @ViewChild(MatPaginator) paginator: MatPaginator;
// @ViewChild(MatSort) sort: MatSort;
//DeviceID","Device_Type","CUSTOMER NAME","Network Provider","Mobile_Number","Mobile number2 ","Subcription_StartDate","Subcription_EndDate","Vehicle_Type","Vehicle_Model","Current C Version","Current Java Version","ignition"
//value assigned to update

  public version;
  public ServerIP;
  public FilePath
  public FileSize
  public Port
  public UserName
  public Password
  public APN
  public Device
  public FirmwareVersion
  public UserID

ngAfterContentInit(){
 

}
ngAfterViewInit() {
  if(this.loadingFlag == false){
    this.dataSource.paginator = this.paginator 
   // this.dataSource.sort = this.sort;
  }
  
}

  constructor(private router: Router,private route: ActivatedRoute,private apollo: Apollo, private DevicesearchService: DevicesearchService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.searchType = localStorage.getItem('deviceType')
  
    const source$ = this.apollo.query<DataQuery>({
      query: gql`
      {
        detailC {
          ID
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
          isSNM476
        }
      }`   
    }).pipe(shareReplay(1))

    source$.pipe(map(result => result.data && result.data.detailC)).subscribe((data) =>   
    this.FirmwareC = data
  );



 const source1$ = this.apollo.query<DataQuery1>({
      query: gql`
      {
        detailJava {
          ID
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
          isSNM476
        }
      }`   
    }).pipe(shareReplay(1))

    source1$.pipe(map(result => result.data && result.data.detailJava)).subscribe((data) =>   
    this.messages = data
  );
    // this.DevicesearchService.searchDetails().subscribe(
    //   data => {
    //     // this.dataSource = new MatTableDataSource(data)
      
    //     // this.dataSource ? this.loadingFlag = false : this.loadingFlag = true;
      
    //     // this.temp = this.dataSource.data.length;
    //   }
    // )
    var pages = "/specificChar?deviceType="+this.searchType+"&page="+this.pageIndex+"&size=10";
    this.entriesPost(pages);
  

    //  this.DevicesearchService.getVersionDetails().subscribe(
    //    data => {
    //     this.entries = data
    //     function* entries(obj) {
    //       for (let key of Object.keys(obj)) {
    //         yield [key, obj[key]];
    //       }
    //    }
  
    //    for (let [key1, value1] of entries(this.entries)) {

      
    //     if(key1 == 'SearchData'){
           
    //        this.Versions = value1;
        
          
    //     }

    //     // for (let [key, value] of entries(value1)) {

    //     // }
        
    //    }
    //    }
    //  ) 
    
    this.route.params.subscribe(params => {
      this.id = params['id'] -1;
    });

  
   

  
  }

  entriesPost(page){
   
   
    this.DevicesearchService.devicePagination(page).subscribe(
      data => {
       
        this.entries = data
        function* entries(obj) {
          for (let key of Object.keys(obj)) {
            yield [key, obj[key]];
          }
       }
  
       for (let [key1, value1] of entries(this.entries)) {
        if(key1 == "totalCount"){
          this.totalCount = value1
         
        }
         if(key1 == "result"){
            this.dataSource = new MatTableDataSource(value1)
      
        this.dataSource ? this.loadingFlag = false : this.loadingFlag = true;
      
        this.temp = this.dataSource.data.length;
         }
       
       }
      }
    )
  }


  pageChangeEvent(page){
    
    this.pageIndex = page.pageIndex;
    this.loadingFlag = true
    var pages = "/specificChar?deviceType="+this.searchType+"&page="+this.pageIndex+"&size=10";
    this.entriesPost(pages)
  }

  search(){
    //
    var pages = "/singleSearch?deviceid="+this.searchKey;
    this.loadingFlag = true
    this.entriesPost(pages)
  }
  
  private paginator: MatPaginator;
  private sort: MatSort;

  

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
  
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;

    this.setDataSourceAttributes();
  }


  

  setDataSourceAttributes() {
    if(this.loadingFlag == false){
  //  this.dataSource.paginator = this.paginator 
    this.dataSource.sort = this.sort;
  }
}

applyFilter() {
    
  this.dataSource.filter = this.searchKey.trim().toLowerCase();
}


private isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

toggleRow(row: any, index: number) {
  this.selection.toggle(row);
 
  for (const [key, value] of Object.entries(row)) {
    if(key == "deviceId")
    {
      this.Device = value
     
    }
   
  }
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: any): string {
  if (!row) {
   
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}


  ngAfterContentChecked()	{
  
  }


  changeTab(event) {
    this.id = event.index;
  }

  listed(version){
   
    for (const [key, value] of Object.entries(version)) {
      if(key == "Name")
      {
        this.version = value;
      }
      if(key == "ServerIP")
      {
        this.ServerIP = value;
      }
      if(key == "FilePath")
      {
        this.FilePath = value
      }
      if(key == "FileSize")
      {
        this.FileSize = value
        
   
      }
      if(key == "Port"){
        this.Port= value;
      }
      if(key == "UserName"){
        this.UserName = value
      }
      if(key == "Password"){
        this.Password = value
      }
      // if(key == "APN"){
      //   this.APN =value
      // }
      // if(key == "ID")
      // {
      //   this.UserID = value
      // }
    }
  }

  postData(selected){
    this.select = selected
    if(this.version != undefined && this.Device != undefined)
    {
      let objData = Object.assign({update: [{Device: this.Device , DeviceID: 351431 , CVersion: this.version , JavaVersion: "", ServerIP: this.ServerIP , FilePath: this.FilePath , FileSize: this.FileSize , FirmwareVersion: this.version , FirmwareType: 0 , Port: this.Port , UserName: this.UserName , Password: this.Password , FirmwareUpgradeEnum: 34 , APN: this.APN , AppInstanceID: null , UserID: "2739" , Internal: false , DeviceGateway: "TDMG" , IOTDevice: ""}]})
    
  
      this.DevicesearchService.PublishedVersion(objData).pipe().subscribe(data=>{
      
      this._snackBar.open(this.Device + " Updated Successfully","",{duration: 5000});
        })
      
      
    }
  

    // if(this.select == false && this.version != undefined && this.Device != undefined)
    // {
    //   let objData = Object.assign({update: [{Device: this.Device , DeviceID: 351431 , CVersion: "" , JavaVersion: this.version , ServerIP: this.ServerIP , FilePath: this.FilePath , FileSize: this.FileSize , FirmwareVersion: this.FirmwareVersion , FirmwareType: 0 , Port: this.Port , UserName: this.UserName , Password: this.Password , FirmwareUpgradeEnum: 34 , APN: this.APN , AppInstanceID: null , UserID: "2739" , Internal: false , DeviceGateway: "TDMG" , IOTDevice: ""}]})
  
    //     this.DevicesearchService.PublishedVersion(objData).pipe().subscribe(data=>{
    //       console.log(data)
    //       this._snackBar.open(this.Device + " Updated Successfully","",{duration: 5000});
    //       })
    // }
    if(this.version == undefined || this.Device == undefined)
    {
      this._snackBar.open("Select Version and CheckBox To Update Version","",{duration: 5000});
    }
  
    
   
  }



  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    if(this.fileToUpload != null){
      alert("FIle Successfully Uploaded")
    }
    //console.log(this.fileToUpload.name);
    }

    dash(){
      this.router.navigate(['Firmware']);
    }
}
