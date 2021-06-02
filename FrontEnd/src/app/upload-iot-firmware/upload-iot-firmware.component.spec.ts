import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UploadIotFirmwareComponent } from './upload-iot-firmware.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


describe('UploadIotFirmwareComponent', () => {
  let component: UploadIotFirmwareComponent;
  let fixture: ComponentFixture<UploadIotFirmwareComponent>;
  let router: Router;
 
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , FormsModule, HttpClientTestingModule, MatSnackBarModule ],
      declarations: [ UploadIotFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIotFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  // it('Combination NgForm test valid', () => {
  //   const testForm = <NgForm>{
  //     value: {
  //       versionName: 'version IoT',
  //       fileName:'IoT device',
  //       Type:'java type'
  //     }
  // };
  //   component.onClicking(testForm)
  //   expect(testForm.valid)

  // });

  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it('Reset Form', () => {
    const testForm = <NgForm>{
      resetForm: () => null,
      valid: false,
      value: {
        versionName: null,
        fileName: null,
        Type: null
      }
  };
   component.reset(testForm)
    expect(testForm.value.fileName).toEqual(null)

  });


  it('should create',()=>{

component.onClicking();

  })

  it('should post method',()=>{

   

let files:FileList;
component.postMethod(files);
spyOn(component, 'filename').and.returnValue(true);


  })


  it('should post data',()=>{
component.postData();

  })
});
