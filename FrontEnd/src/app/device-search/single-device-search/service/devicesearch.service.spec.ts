import { DeviceSearchComponent } from './../../device-search.component';
import { TestBed } from '@angular/core/testing';
import { DevicesearchService } from './devicesearch.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

describe('DevicesearchService', () => {
  let service: DevicesearchService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule,HttpClientTestingModule,ApolloTestingModule],
      providers:[DevicesearchService],
    

    });
    service = TestBed.inject(DevicesearchService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should publish version', () => {
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
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(value);
   req.flush(value)
  });


  it('should search details', () => {
    let value= {
      
    }
    
    
    service.searchDetails().subscribe(
      data => expect(data).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._fwdashboard);
    expect(req.request.method).toEqual('GET');
    expect(req.request.body).toEqual(null);
    req.flush(value)
  });



  it('should get version details', () => {
    let value= {
     
    }
    
    
    service.getVersionDetails().subscribe(
      data => expect(data).toEqual(value,'should return'),
      fail
    )
    const req = httpTestingController.expectOne(environment._dashboard);
    expect(req.request.method).toEqual('GET');
    expect(req.request.body).toEqual(null);
    req.flush(value)
  });


  it('should search details', () => {
    let value= {
      
    }
    
    
    service.searchDetails().subscribe(
      data => expect(data).toEqual(value,'`+page+``'),
      fail
    )
    const req = httpTestingController.expectOne(environment._deviceWithPagination);
    expect(req.request.method).toEqual('GET');
    expect(req.request.body).toEqual(null);
    req.flush(value)
  });

});
