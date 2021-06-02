import { Sort, MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SingleDeviceSearchComponent } from './single-device-search.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { version } from 'graphql';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

describe('SingleDeviceSearchComponent', () => {
  let component: SingleDeviceSearchComponent;
  let fixture: ComponentFixture<SingleDeviceSearchComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule,HttpClientModule,MatSnackBarModule,BrowserAnimationsModule, ApolloTestingModule],
      declarations: [ SingleDeviceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeviceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
   component.ngAfterViewInit();
   let loadingFlag=true;
   if(loadingFlag=false){
    let i=1;
    while(component.dataSource.paginator.hasNextPage()) {
        i++;
        component.dataSource.paginator.nextPage();
        expect(i).toEqual(4);
   }
   
  }
  });
  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it ('should apply filter', () => {

component.applyFilter();
expect(component.dataSource.filter = component.searchKey.trim().toLowerCase());

 });

 it ('should toggle row',()=>{
  let row:any
  let index:number
  component.toggleRow(row,index);
  component.selection.toggle(row);
 
  for (const [key, value] of Object.entries(row)) {
    if(key == "GPSDeviceID")
    {
     expect(component.Device = value  ) 
     
 
    }
    if(key == "Firmware_Version")
    {
      expect(component. FirmwareVersion = value)
    }
  }


});

it ('should change tab', () => {

  component.changeTab(event)
  
});

it ('should list the version', () => {

component.listed(version);
let key={

  version:'',
  ServerIP:'',
  FilePath :'',
  FileSize :'',
  Port:'',
  UserName :'',
  Password :'',
}
  expect(component.listed(version)).toHaveBeenCalledWith(key) 



});


it ('should change page event',()=>{
let pageIndex=0;
  let page= pageIndex;
component.loadingFlag=false;
component.pageChangeEvent(page);
expect(component.loadingFlag).toBe(true);

})
it ('should search',()=>{

component.loadingFlag=false;
component.search();
expect(component.loadingFlag).toBe(true);

});


it('checkbox',()=>{

  component.checkboxLabel();

});



it('should post data',()=>{

  let selected;
  component.postData(selected);


   
   
});


it('should postmethod',()=>{

let files: FileList;
component.postMethod(files);

})


});


