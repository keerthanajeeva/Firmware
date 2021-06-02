import { UploadJavaFirmware } from './../model/model';
import { UploadJavaFirmwareService } from './service/upload-java-firmware.service';
import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadJavaFirmwareComponent } from './upload-java-firmware.component';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('UploadJavaFirmwareComponent', () => {
  let component: UploadJavaFirmwareComponent;
  let fixture: ComponentFixture<UploadJavaFirmwareComponent>;
  let router: Router;
  let post: UploadJavaFirmwareService;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule,FormsModule],
      declarations: [ UploadJavaFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJavaFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Upload Java Firmware NgForm test valid', () => {
    const testForm = <NgForm>{
      value: {
        Name: '',
        ServerIP: '',
        UserName: '',
        FilePath: '',
        FileSize: '',
        Password: '',
        ReleaseNote: '',
        firmwareType: '',
        filename: '',
        Port: 2222,
        IsFirmwareC: false
      }
  };
    component.onClicking(testForm)
    expect(testForm.valid)

    if(testForm.valid){
      post.createJavaFirmware([testForm.value]).pipe().subscribe(data =>{
      if(data == true){
        expect(matSnackBarSpy.open('Value Uploaded Successfully')).toBeTruthy();
      }
      })
    }


  });


  it('edit form reset', () => {
    const testForm = <NgForm>{
      resetForm: () => null,
      valid: false,
      value: {
        Name: null,
        ServerIP:null,
        UserName:null,
        FilePath:null,
        FileSize: null,
        Password: null,
        ReleaseNote: null,
        firmwareType: null,
        filename: null,
        Port: null,
        IsFirmwareC: null


      }
  };

 component.reset(testForm)
 expect(testForm.value.Name).toEqual(null)
  });


  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it('On Navigation', fakeAsync(() => {

    const navigateSpy = spyOn(router, 'navigate');
    component.navigation();
    tick(2000);
    expect(navigateSpy).toHaveBeenCalledWith(['deviceSearch/single_device/1']);

  }));

  it('Upload java Firmware NgForm test valid', () => {
    const accountForm = <NgForm>{
      value: {
        Name: '',
        ServerIP: '',
        UserName: '',
        FilePath: '',
        FileSize: '',
        Password: '',
        ReleaseNote: '',
        firmwareType: '',
        filename: '',
        Port: 2222,
        IsFirmwareC: false
      }
  };
    component.onClicking(accountForm)
    expect(accountForm.valid)

    if(accountForm.valid){
      post.createJavaFirmware([accountForm.value]).pipe().subscribe(data =>{
      if(data = true){
        expect(matSnackBarSpy.open('Value Uploaded Successfully')).toBeTruthy();
      }
     
      })
    }


  });

 
});
