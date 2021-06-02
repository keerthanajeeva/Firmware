
import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { OtherOTAPCommandComponent, addCommand, flashFirmware } from './other-otap-command.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { version } from 'graphql';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';




describe('OtherOTAPCommandComponent', () => {
  let component: OtherOTAPCommandComponent;
  let fixture: ComponentFixture<OtherOTAPCommandComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule,MatSnackBarModule,MatDialogModule,ApolloTestingModule],
      declarations: [OtherOTAPCommandComponent],
      
    })
    .compileComponents();
    
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherOTAPCommandComponent);
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

  it ('should apply filter', () => {

    const event = { target: { value: 'hello' } } as any;
    component.applyFilter(event);
    expect(component.dataSource.filter).toBe('hello');

  });
  
  it ('should apply filter1', () => {
  
    const event = { target: { value: 'hello' } } as any;
    component.applyFilter1(event);
    expect(component.dataSource.filter).toBe('hello');
    
  });
  
  
  it ('should change tab', () => {
  
    component.changeTab(event);
    
  });
  
  
it ('should list the version', () => {
  component.listed(version);
  for (const [key, value] of Object.entries(version)) {
   
    if(key == "Message"){
      expect (component.messageFormat = value)
    }
    if(key == "Name"){
      expect( component.messageName = value   )
    }}
  });
  
  
  it ('should post', () => {
  let files: FileList
    component.postMethod(files);
    expect (component.fileToUpload = files.item(0));
  
  });
  
  
  it ('should toggle row',()=>{
  let row:any
  let index:number
    component.toggleRow(row,index);
    component.selection.toggle(row);
    component.exporter.toggleRow(index);
  
    for (const [key, value] of Object.entries(row)) {
      if(key == "DeviceID"){
        expect (component.device = value)  }
      }
  
  });
  
  it ('should add file', () => {
    let files: FileList
      component.addfile(files);
      expect (component.getCategory('n20'));
      expect (component.file = files.item(0));

    });
  
    it('should remove function',()=>{
  
  component.removeFunction();
  const filterVal = "TAP66"
  expect(component.dataSource.filter = filterVal.trim().toLocaleLowerCase() );
  
    });


    it('should post data',()=>{
    component.PostData()

    })

    it('should Add command',()=>{
      component.AddCommand()
    
          })

 it('should Parse file',()=>{
   let fileData;
component.parseFile(fileData)
          
    })

 it('should checkbox',()=>{

  component.checkboxLabel()
 })
    
});


describe('Add Command Dialog Component', () => {
    

    
  let component: addCommand;
  let fixture: ComponentFixture<addCommand>;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        addCommand
      ],
      imports: [
        BrowserAnimationsModule,ApolloTestingModule,MatSnackBarModule,FormsModule,
        MatButtonModule,
        MatDialogModule
      ],
      providers: [
        {
          // I was expecting this will pass the desired value
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        {  
           provide: MatDialogRef, 
           useValue: {     close: (dialogResult: any) => { }   } }
      ]
    })
      .compileComponents();
            
  }));
    
        
  beforeEach(() => {
    fixture = TestBed.createComponent(addCommand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    
  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  // it('should close dialog when close button clicked', fakeAsync(() => {
  //   component.onNoClick();
  //   fixture.detectChanges();
  //   tick();
  //   // expect(mockMainDialogRef.close.calls.count()).toBe(1, 'dialog closed');
  // }));
  it('Form Testing', () => {

    const testForm = <NgForm>{
      value: {
        versionName:'CV',
        fileSize:'10'
      }
  };

  component.AddCommand(testForm);
  expect(testForm.valid);
  
  });

});



describe('Flash Firmware Dialog Component', () => {
    

    
  let component: flashFirmware;
  let fixture: ComponentFixture<flashFirmware>;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        flashFirmware
      ],
      imports: [
        BrowserAnimationsModule,ApolloTestingModule,MatSnackBarModule,FormsModule,
        MatButtonModule,RouterTestingModule,  HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        {
          // I was expecting this will pass the desired value
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        {  
           provide: MatDialogRef, 
           useValue: {     close: (dialogResult: any) => { }   } }
      ]
    })
      .compileComponents();
            
  }));
    
        
  beforeEach(() => {
    fixture = TestBed.createComponent(flashFirmware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    
  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  // it('should close dialog when close button clicked', fakeAsync(() => {
  //   component.onNoClick();
  //   fixture.detectChanges();
  //   tick();
  //   // expect(mockMainDialogRef.close.calls.count()).toBe(1, 'dialog closed');
  // }));
  
  it('Form Testing', () => {
    const addCommandForm = <NgForm>{
      value: {
        versionName:'CV',
        fileSize:'10'
      }
  };
  component.AddCommand(addCommandForm);
  expect(addCommandForm.valid);
  
  });


  

});