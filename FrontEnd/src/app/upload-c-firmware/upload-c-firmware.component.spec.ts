import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { UploadCFirmwareComponent } from './upload-c-firmware.component';
import { Router } from '@angular/router';
import { UploadCFirmwareService } from './service/upload-c-firmware.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, DefaultValueAccessor, ControlValueAccessor } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

describe('UploadCFirmwareComponent', () => {
  let component: UploadCFirmwareComponent;
  let fixture: ComponentFixture<UploadCFirmwareComponent>;
  let router: Router;
  let post: UploadCFirmwareService;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,  HttpClientTestingModule, MatSnackBarModule,
        FormsModule,ApolloTestingModule],
      declarations: [ UploadCFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    post  = TestBed.inject(UploadCFirmwareService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Upload C Firmware NgForm test valid', () => {
    const testForm = <NgForm>{
      value: {
        Name: 'CV',
        ServerIP: '198.168.2.23',
        UserName: 'visala',
        FilePath: 'C/Path',
        FileSize: '10',
        Password: 'ukesh',
        ReleaseNote: 'goog',
        firmwareType: 'Tap66',
        filename: '',
        Port: 21,
        IsFirmwareC: true
      }
  };
    component.onClicking(testForm)
    expect(testForm.valid)

    if(testForm.valid){
      post.createCFirmware([testForm.value]).pipe().subscribe(data =>{
      if(data == true){
        expect(matSnackBarSpy.open('Posted value')).toBeTruthy();
 
      }
    
      })
    }


  });

  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.dash();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it('On Success Navigation', fakeAsync(() => {

    const navigateSpy = spyOn(router, 'navigate');
    component.navigation();
    tick(2000);
    expect(navigateSpy).toHaveBeenCalledWith(['deviceSearch/single_device/1']);

  }));

  it('Edit File', () => {

    const testForm = <NgForm>{
      value: {
        versionName:'CV',
        fileSize:'10'
      }
  };

  component.onEdit(testForm);
  expect(testForm.valid);
  
  });

  it('edit form reset', () => {
    const testForm = <NgForm>{
      resetForm: () => null,
      valid: false,
      value: {
        versionName: null,
        fileSize:null
      }
  };

 component.editFormreset(testForm)
 expect(testForm.value.versionName).toEqual(null)
  });




  
  it('Form reset 1', () => {
    const testForm = <NgForm>{
      resetForm: () => null,
      valid: false,
      value: {
        Name: null,
        ServerIP: null,
        UserName: null,
        FilePath: null,
        FileSize: null,
        Password: null,
        ReleaseNote: null,
        firmwareType: null,
        filename: null,
        Port: 21,
        IsFirmwareC: true
      }
  };
  component.uploadFormreset(testForm)
  expect(testForm.value.UserName).toEqual(null)
    
  });


  var versions = [
    {ID: 1, Name: 'one'},
    {ID: 2, Name: 'two'},
    {ID: 3, Name: 'three'}
]

  it('listed version', () => {

    component.listed(versions)
    //expect(component.listed(versions)).toBeTruthy()
    
    for (const [key, value] of Object.entries(versions)) {

      
      if(key == "Name"){
        it('should pass', function () {
          expect(true).toBeTruthy();
      });
      // Named = value
      // it('equal', function(){
      //   expect(Named).toBeTruthy();
      // })
      }
      if(key == "ID"){
        it('should pass', function () {
          expect(true).toBeTruthy();
      });
      }
    }
    
  })
 

});
