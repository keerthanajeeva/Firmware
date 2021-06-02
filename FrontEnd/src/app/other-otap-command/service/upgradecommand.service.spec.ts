import { TestBed } from '@angular/core/testing';
import { UpgradecommandService } from './upgradecommand.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


describe('UpgradecommandService', () => {
  let service: UpgradecommandService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule,HttpClientTestingModule],
      providers:[UpgradecommandService]
    });
    service = TestBed.inject(UpgradecommandService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should publish', () => {
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
    
    
   
    service.PublishedVersion(value).subscribe(
      data => expect(data).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._publishVersion);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(value);
    req.flush(value)
  });

  it('should IOT', () => {
    let data;
    let deviceID
    
   
    service.IotDeviceOutBound(data,deviceID).subscribe(
      value => expect(value).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._deviceOutbound);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(data,deviceID);
    req.flush(data,deviceID)
  })


  it('should GET IOT', () => {

    let value= {
     
    }
    
    service.GetIotDeviceOutBound().subscribe(
      value => expect(value).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._getDevice);
    expect(req.request.method).toEqual('GET');
    expect(req.request.body).toEqual(value);
    req.flush(value)
  })


});
