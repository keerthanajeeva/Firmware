import { from } from 'rxjs';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule],
      declarations: [ DashboardComponent ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.firmware();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });



});
