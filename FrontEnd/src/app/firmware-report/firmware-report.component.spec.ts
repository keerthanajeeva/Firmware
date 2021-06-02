import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareReportComponent, QUERY } from './firmware-report.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import gql from 'graphql-tag';
import { query } from '@angular/animations';
import { ExportToCsv } from 'export-to-csv';

describe('FirmwareReportComponent', () => {
  let component: FirmwareReportComponent;
  let fixture: ComponentFixture<FirmwareReportComponent>;
  let router: Router;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule,ApolloTestingModule],
      declarations: [ FirmwareReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    controller = TestBed.inject(ApolloTestingController);
  });
 

  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

 
  it('ng fit', () => {
    let val=['n21']
    component.search(val)
    expect(component.search).toBe(Array)
    component.Query();
  
  });
  
  it('Apollo', () => {
//  const op = controller.expectOne(QUERY);
component.Query()
expect(component.Query).toBeDefined()
  // Assert that one of variables is Mr Apollo.
//  expect(op.operation.variables.DeviceType).toEqual('TAP66');

  // Respond with mock data, causing Observable to resolve.
  // op.flush({
  //   data: {
  //     otapcommand: {
  //       DeviceID: 'n21',
  //       DeviceType: 'TAP66',
  //     },
  //   },
  // });
  })

  afterEach(() => {
    controller.verify()
  })

  it('Download', () => {
    var person = { 
      firstname:"Tom", 
      lastname:"Hanks" 
   }; 
   component.download()
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
  
  expect(component.download).toBeDefined()
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onchange', () => {
    let valued;
    expect(component.onChanges(valued)).toBe();
  });


});
