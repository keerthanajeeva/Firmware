import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExportToCsv } from 'export-to-csv';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ServiceService} from './service.service';
export const QUERY = gql`
query otapcommand($DeviceID:[String]){
otapcommand(DeviceID: $DeviceID){
DeviceID,
DeviceID
DeviceType
Customer
NetworkProvider
MobileNo
Model
VehicleTypeName
CurrentCVersion
CurrentJavaVersion
Ignition
}
}  
`
@Component({
selector: 'app-firmware-report',
templateUrl: './firmware-report.component.html',
styleUrls: ['./firmware-report.component.css']
})
export class FirmwareReportComponent implements OnInit {d
myControl = new FormControl();
options: string[] = [];
public searchedData
public listArray
public entries: object = [];
public devicelist: object = [];
searchType;
pageIndex=0;
loadingFlag = true;
constructor(private DevicesearchService: ServiceService,private router:Router, private _snackBar: MatSnackBar , private http: HttpClient,private apollo: Apollo) { }
ngOnInit(): void {
// var pages = "/specificChar?deviceid="+this.searchType+"&page=0&size=10";
}
entriesPost(page) {
this.DevicesearchService.deviceSearch(page).subscribe(
data => {
this.entries = data
console.log(this.entries)
function* entries(obj) {
for (let key of Object.keys(obj)) {
yield [key, obj[key]];
}
}
for (let [key1, value1] of entries(this.entries)) {
if(key1 == "result"){
this.devicelist = value1
}
}
})}
// pageChangeEvent(page){
//   this.pageIndex = page.pageIndex;
//   this.loadingFlag = true
// }
search(val){
if(val != undefined)
{
this.listArray = val.split(',');
this.Query();
}
}
Query(){
this.apollo.query({
query: QUERY,
variables:{
DeviceID: this.listArray
}
}).subscribe(result => {
this.entries = result.data['otapcommand']
this.download();
})
}
download(){
const options = { 
filename: 'Firmware Report',
fieldSeparator: ',',
quoteStrings: '"',
decimalSeparator: '.',
showLabels: true, 
showTitle: false,
useTextFile: false,
useBom: true,
useKeysAsHeaders: true,
};
const csvExporter = new ExportToCsv(options);
csvExporter.generateCsv(this.entries);
}
dash(){
this.router.navigate(['Firmware']);
}
onChanges(valued){
var search = valued
var pages = "/specificChar?deviceid="+search+"&page="+this.pageIndex+"&size=10";
this.entriesPost(pages)
}
}