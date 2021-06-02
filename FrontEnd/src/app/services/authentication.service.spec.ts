import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,HttpClientModule],
    });
    service = TestBed.inject(AuthenticationService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get token', () => {
service.getToken();


  });

  it('should be logged in', () => {
    service.loggedIn();
    
    
      });


  it('should login user',()=>{
    let loginData;

service.loginUser(loginData).subscribe(
  user => expect(user).toEqual(loginData,'should return'),
  fail
)
const req = httpTestingController.expectOne(environment._loginProdUrl);
expect(req.request.method).toEqual('POST');
expect(req.request.body).toEqual(null);
req.flush(loginData)

  })    
});
