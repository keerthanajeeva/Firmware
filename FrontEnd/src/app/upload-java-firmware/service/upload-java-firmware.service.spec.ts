import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadJavaFirmwareService } from './upload-java-firmware.service';
import { Router } from '@angular/router';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('UploadJavaFirmwareService', () => {
  let service: UploadJavaFirmwareService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule,HttpClientTestingModule],
      providers:[UploadJavaFirmwareService]
    });
    service = TestBed.inject(UploadJavaFirmwareService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should create java firmware', () => {
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
    
 
   
    service.createJavaFirmware(value).subscribe(
      data => expect(data).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._firmwareUpload);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(value);
    req.flush(value)
    
  });

});
