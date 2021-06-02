import { Component,OnInit  } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import { Firmware } from './model/model';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs'
import { ExportToCsv } from 'export-to-csv';


export interface Fruit {
  name: string;
}

export type devicetype ={
  ID:Number;
  DeviceType:String;
  IsActive:Boolean;
}


export type DataQuery ={
  devicetype:devicetype[]
}

// const QUERY = gql`
// {
//   devicetype {
//     ID
//     DeviceType
//     IsActive
//   }
// }
// `;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public headerFlag = false;
  emp:object =[];
  emp1:object =[];
  emp2:object =[];
  title = 'osg';
  public firmwares: Firmware;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  firmwareValues: string[];
  OtapDevice= [
    {"name" : "TAP66"},
    {"name" : "TAP76"},
    {"name" : "SNM476"}
  ]
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  count= 0
query$: Observable<devicetype[]>;
  constructor(
    private router: Router,private apollo: Apollo) {
      this.firmwares = new Firmware();
      this.firmwareValues = this.firmwares.name;
     }

     ngOnInit() {

      const source$ = this.apollo.query<DataQuery>({
        query: gql`
        {
          devicetype {
            ID
            DeviceType
            IsActive
          }
        }`
        
      }).pipe(shareReplay(1))

 source$.pipe(map(result => result.data && result.data.devicetype)).subscribe((data) => this.emp =data);
   
      

//  const source1$ = this.apollo.query<DataQuery>({
//   query: gql`
//   {
//     devicetype {
//       ID
//       DeviceType
//       IsActive
//     }
//   }`,
// }).pipe(shareReplay(1))

// source1$.pipe(map(result => result.data && result.data.devicetype)).subscribe((data) => this.emp1 =data);


  
  }
    dashboard(){
      // this.emp2 = this.emp1
      // console.log(this.emp2)
      
    }
    
    firmware(){
      this.router.navigate(['Firmware']);
     
    }
    
    // add(event: MatChipInputEvent): void {
    //   const input = event.input;
    //   const value = event.value;
  
    //   // Add our fruit
    //   if ((value || '').trim()) {
    //     this.fruits.push({name: value.trim()});
    //   }
  
    //   // Reset the input value
    //   if (input) {
    //     input.value = '';
    //   }
    // }
  
    // remove(fruit: Fruit): void {
    //   const index = this.fruits.indexOf(fruit);
  
    //   if (index >= 0) {
    //     this.fruits.splice(index, 1);
    //   }
    // }

    deviceSearch(device) {
      this.router.navigate(['/deviceSearch', device])
    }



exit(){
  setTimeout(() =>  location.reload(),100)
}
    
}
