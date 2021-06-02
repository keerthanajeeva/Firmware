import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { UpgradeFirmwareCombinationComponent } from './upgrade-firmware-combination.component';

import { FormsModule, NgForm } from '@angular/forms';

import { Router } from '@angular/router';

describe('UpgradeFirmwareCombinationComponent', () => {
  let component: UpgradeFirmwareCombinationComponent;
  let fixture: ComponentFixture<UpgradeFirmwareCombinationComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule , FormsModule],
      declarations: [ UpgradeFirmwareCombinationComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeFirmwareCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Combination NgForm test valid', () => {
    const testForm = <NgForm>{
      value: {
         CV:"TAP68",
         javaV:"TAP76C"
      }
  };
    component.onClicking(testForm)
    expect(testForm.valid)

  });

  it('Combination NgForm test invalid', () => {
    const testForm = <NgForm>{
      value: {
         CV:"",
         javaV:""
      }
  };
    component.onClicking(testForm)
    expect(testForm.invalid)

  });
  
  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  
});
 