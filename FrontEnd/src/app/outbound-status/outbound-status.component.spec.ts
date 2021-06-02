import { MatPaginator } from '@angular/material/paginator';
import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';

import { OutboundStatusComponent } from './outbound-status.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { compileNgModule, InvokeMethodExpr } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { fileURLToPath } from 'url';
import { FileExporter } from 'cdk-table-exporter';

describe('OutboundStatusComponent', () => {
  let component: OutboundStatusComponent;
  let fixture: ComponentFixture<OutboundStatusComponent>;
  let router: Router;
   
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  HttpClientTestingModule,RouterTestingModule],
      declarations: [ OutboundStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', inject([HttpTestingController], () => {
    expect(component).toBeTruthy();
  }));

  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it ('should change tab', () => {

    component.tabIndex===0;
    component.changeTab(event);
    expect(component.tabIndex).toHaveBeenCalledWith (component.tabIndex===1);

  });

  
it ('should apply filter', () => {
  component.applyFilter();
  const filterVal = "TAP66"
  expect(component.listData.filter = filterVal.trim().toLocaleLowerCase() );
});


it ('should toggle',()=>{

  let row:any;
  let index:number;
  component.toggleRow(row,index)

 expect( component.selection.toggle(row)  ) ;
 expect(component.exporter.toggleRow(index)  ) ;

});


it('Combination NgForm test valid', () => {
  const accountForm = <NgForm>{
    value: {
       CV:"TAP68",
       javaV:"TAP76C"
    }
};
  component.onClicking(accountForm)
  expect(accountForm.valid)

});

it('Combination NgForm test invalid', () => {
  const accountForm = <NgForm>{
    value: {
       CV:"",
       javaV:""
    }
};
  component.onClicking(accountForm)
  expect(accountForm.invalid)

});


it('should post',()=>{
let files:FileList;
let fileToUpload:File;
component.postMethod(files)

if(component.fileToUpload!=null){
  expect(fileToUpload).toHaveBeenCalledWith(" FIle Successfully Uploaded")



}
else{
  expect(fileToUpload).toHaveBeenCalledWith(" FIle not Uploaded");

}

})

it('should parse',()=>{
 let fileData;
component.parseFile(fileData)

  })

  it('master toggle ',()=>{
    component.masterToggle();
  expect (component.listData.data.forEach).toBeTruthy();
  
     })


     it('should checkbox',()=>{
     expect (component.checkboxLabel()).toBeTrue();

     })

     it('should add the files',()=>{
         let files: FileList;
         component.addfile(files);
        expect (component.file = files.item(0));


     })



    });