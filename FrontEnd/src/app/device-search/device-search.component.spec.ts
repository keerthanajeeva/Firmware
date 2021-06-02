import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DeviceSearchComponent } from './device-search.component';
import { Router } from '@angular/router';
import { Identifiers } from '@angular/compiler';

describe('DeviceSearchComponent', () => {
  let component: DeviceSearchComponent;
  let fixture: ComponentFixture<DeviceSearchComponent>;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ DeviceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSearchComponent);
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
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it('Breadcrum routing', () => {
let id=1;
    const navigateSpy = spyOn(router, 'navigate');
    component.single();
    expect(navigateSpy).toHaveBeenCalledWith(['deviceSearch/single_device/',id]);

  });
  it('Breadcrum routing', () => {
let id=2;
    const navigateSpy = spyOn(router, 'navigate');
    component.multi();
    expect(navigateSpy).toHaveBeenCalledWith(['deviceSearch/single_device/',id]);

  });

 

});
