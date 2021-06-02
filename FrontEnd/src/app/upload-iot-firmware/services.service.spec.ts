import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';


describe('ServicesService', () => {
  let service: ServicesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[ServicesService]
    });
    service = TestBed.inject(ServicesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should upload', () => {

    let data= {
FileName: ''
    }
    
 
   
    service.uploadFirmware(data).subscribe(
      data => expect(data).toEqual('should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._firmwareFileUpload);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(data);
    req.flush(data)
  });


});
