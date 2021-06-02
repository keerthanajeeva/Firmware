import { TestBed } from '@angular/core/testing';

import { FmdashboardService } from './fmdashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('FmdashboardService', () => {
  let service: FmdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
    });
    service = TestBed.inject(FmdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
