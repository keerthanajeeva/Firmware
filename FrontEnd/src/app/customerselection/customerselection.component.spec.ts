import { gql } from 'graphql-tag';
import { from } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerselectionComponent} from './customerselection.component';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { Router } from '@angular/router';



describe('CustomerselectionComponent', () => {
  let component: CustomerselectionComponent;
  let fixture: ComponentFixture<CustomerselectionComponent>;
  let router: Router;
  let backend: ApolloTestingController;

 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,ApolloTestingModule,],
      declarations: [ CustomerselectionComponent ]
     
     
  
    })
    .compileComponents();
  
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    backend = TestBed.get(ApolloTestingController);


    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.change();
    expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);

  });

  it('should disable select button', () => {
  component.buttonDisabled=false;
  component.reset();
  expect(component.buttonDisabled).toBe(true);
  });
  
});
