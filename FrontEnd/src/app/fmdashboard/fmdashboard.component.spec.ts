import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FmdashboardComponent } from './fmdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { Router } from '@angular/router';

describe('FmdashboardComponent', () => {
  let component: FmdashboardComponent;
  let fixture: ComponentFixture<FmdashboardComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,  ApolloTestingModule],
      declarations: [ FmdashboardComponent ]
    })
    .compileComponents();
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);

  });

  
  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.menu();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });
});
