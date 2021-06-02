import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule , HttpClient} from '@angular/common/http';

import { UploadCFirmwareService } from './upload-c-firmware.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

describe('UploadCFirmwareService', () => {
  let service: UploadCFirmwareService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      providers:[UploadCFirmwareService]
    });
    service = TestBed.inject(UploadCFirmwareService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add c firmware', () => {
    let value= {
      Name: 'CV',
      ServerIP: '198.168.2.23',
      UserName: 'visala',
      FilePath: 'C/Path',
      FileSize: '10',
      Password: 'ukesh',
      ReleaseNote: 'goog',
      firmwareType: 'Tap66',
      filename: '',
      Port: 21,
      IsFirmwareC: true
    }
    
 
   
    service.createCFirmware(value).subscribe(
      data => expect(data).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._firmwareUpload);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(value);
    req.flush(value)
  });
});
