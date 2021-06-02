import { Component, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import { OutboundCdgMultiple} from '../model/model'
import { OutboundService } from './outbound.service';
import * as XLSX from 'xlsx';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableExporterDirective } from 'mat-table-exporter';


@Component({
  selector: 'app-outbound-status',
  templateUrl: './outbound-status.component.html',
  styleUrls: ['./outbound-status.component.css']
})
export class OutboundStatusComponent implements OnInit , AfterViewInit , AfterContentChecked ,AfterContentInit {

 
  
  Outbound:OutboundCdgMultiple;
  public entries: object = [];
  public entries1: object = [];
  // public file : File;
  fileToUpload: File;
  id = 0;
  tabIndex = 0;
  temp = null
  temp1 = null
  listData: MatTableDataSource<any>
  listData1: MatTableDataSource<any>
  arrayBuffer:any;
  file:File;
  filelist: any;
  deviceArr = [];
  deviceJSON: any;
  loadingFlag = true;
  loadingFlag1 = true;
  fileName= 'Outbound Status Report.xlsx'; 
  displayedColumns: string[]=["select","_id","DeviceId","cn","symbol","weight","mn2","Message.FilePath","Message.APN","InsertUTC","model"]
  displayedColumns1: string[]=["select","_id","DeviceId","cn","symbol","weight","mn2","Message.FilePath","Message.APN","InsertUTC","model"]
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator) paginators: MatPaginator;
 // @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatTableExporterDirective, { static: false }) exporter: MatTableExporterDirective;
  
  constructor(private route: ActivatedRoute, private outbound: OutboundService,private router:Router ) { }
  
    ngOnInit(): void {
      
        this.outbound.outbound().subscribe(
          data => { 
            this.entries = data;          
      function* entries(obj) {
        for (let key of Object.keys(obj)) {
          yield [key, obj[key]];
        }
     }

     for (let [key1, value1] of entries(this.entries)) {
     
        if(key1 == 'result'){
        
          this.listData = new MatTableDataSource(value1)
          this.listData ? this.loadingFlag = false : this.loadingFlag = true;
         
          this.temp = this.listData.data.length;
        }

      }
      this.listData.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'Message.FilePath': return item.Message.FilePath;
          case 'Message.APN' : return item.Message.APN;
          default: return item[property];
        }
      };
   //   this.listData.sort = this.sort;

     // setTimeout(() => this.listData.paginator = this.paginator);

   
          },
       
        ) 

        
      
      
      this.Outbound ={
        invoice: '',
        device: '',
        dispatch: '',
        from: '',
        to: ''
      }
    }
  
  
    private isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.listData.data.length;
      return numSelected === numRows;
    }
  
    toggleRow(row: any, index: number) {
      this.selection.toggle(row);
      this.exporter.toggleRow(index);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
  
  
  
  
    changeTab(event) {
     
      this.tabIndex = event.index;
     
    }


    public onClicking(accountForm: NgForm)
    {
     
      if(accountForm.valid)
      {
       
      }
      else
      {
        return;
      }
  
    }

    private paginator: MatPaginator;
    private sort: MatSort;
    private paginator1: MatPaginator;
    private sort1: MatSort;
    searchKey:string;
  
  
    @ViewChild(MatSort) set matSort(ms: MatSort) {
      this.sort = ms;
      this.sort1 = ms;
      this.setDataSourceAttributes();
    }
  
    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
      this.paginator = mp;
      this.paginator1 = mp;
      this.setDataSourceAttributes();
    }


    
  
    setDataSourceAttributes() {
      if(this.loadingFlag == false){
      this.listData.paginator = this.paginator 
      this.listData.sort = this.sort;
    }

    if(this.loadingFlag1 == false){
     // this.listData1.paginator = this.paginator1 
      this.listData1.sort = this.sort1;
    }
    }

   
      ngAfterContentInit(){
       
      }
     

      ngAfterViewInit() {
         
      }

      ngAfterContentChecked()	{
        
      }
    
    

postMethod(files: FileList) {
  this.fileToUpload = files.item(0);
  if(this.fileToUpload != null){
    alert("FIle Successfully Uploaded")
  }

  }
      
    applyFilter() {
    
      this.listData.filter = this.searchKey.trim().toLowerCase();
    }
    addfile(files: FileList) {
      this.file = files.item(0);
       
  let fileReader = new FileReader();    
  fileReader.readAsArrayBuffer(this.file);     
  fileReader.onload = (e) => {    
      this.arrayBuffer = fileReader.result;    
      var data = new Uint8Array(this.arrayBuffer);    
      var arr = new Array();    
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
      var bstr = arr.join("");    
      var workbook = XLSX.read(bstr, {type:"binary"});    
      var first_sheet_name = workbook.SheetNames[0];    
      var worksheet = workbook.Sheets[first_sheet_name];    
      this.filelist = XLSX.utils.sheet_to_json(worksheet,{raw:true});    
      this.parseFile(this.filelist);
  }    
}
parseFile(fileData) {
  fileData.map(data=> {
   
    this.deviceArr.push(data['Device ID'])
   
  })
  this.deviceJSON = {
    "deviceList": this.deviceArr
  }
  this.outbound.multipleDevice(this.deviceJSON).pipe().subscribe(data=> {

    this.entries1 = data;          
    function* entries1(obj) {
      for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
      }
   }

   for (let [key1, value1] of entries1(this.entries1)) {
    
      if(key1 == 'result'){
       
        this.listData1 = new MatTableDataSource(value1)
        this.listData1 ? this.loadingFlag1 = false : this.loadingFlag1 = true;
        setTimeout(() => this.listData1.paginator = this.paginator);
        this.temp1 = this.listData1.data.length;
       
      }

    }
    
  })
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.listData.data.forEach(row => this.selection.select(row));
     
}

  



    dash(){
      this.router.navigate(['Firmware']);
    }
  }
  