import { compileNgModule } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenInterceptorService } from './token-interceptor.service';
import { request } from 'http';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule],
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an Authorization ', () => {
    let next;
    service.intercept(request,next).subscribe(response => {
      expect(response).toBeTruthy();
  
    });
  
    
  

  });
});
