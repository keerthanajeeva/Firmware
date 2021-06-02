import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OutboundService } from './outbound.service';
import { combineAll } from 'rxjs/operators';
import { componentFactoryName } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule , HttpClient} from '@angular/common/http';

describe('OutboundService', () => {
  let service: OutboundService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,HttpClientTestingModule],
      providers:[OutboundService] 
    });
    service = TestBed.inject(OutboundService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


it('multiple device', () => {
  let deviceList= {
  
  }
  
 
  service.multipleDevice(deviceList).subscribe(
    data => expect(data).toEqual(deviceList,'should return'),
    fail
  )
  const req = httpTestingController.expectOne(environment._multipleDeviceapi);
  expect(req.request.method).toEqual('POST');
  expect(req.request.body).toEqual(deviceList);
  req.flush(deviceList)
});






it('should fetch outbound api',()=>{
let value={


}
  service.outbound().subscribe(  
    data => expect(data).toEqual('should return'),
    fail
  )
  const req = httpTestingController.expectOne(environment._outboundapi);
  expect(req.request.method).toEqual('GET');
  expect(req.request.body).toEqual(value);
  req.flush(value)


  

})


});