import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ApolloTestingModule],
      providers:[ServiceService],

    });
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search details', () => {
    let value= {
      
    }
    
    let page;
    service.deviceSearch(page).subscribe(
      data => expect(data).toEqual(value,'`+page+``'),
      fail
    )
    const req = httpTestingController.expectOne(environment._deviceWithPagination);
    expect(req.request.method).toEqual('GET');
    expect(req.request.body).toEqual(null);
    req.flush(value)
  });


});
