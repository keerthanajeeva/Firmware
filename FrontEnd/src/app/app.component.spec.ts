import { combineAll } from 'rxjs/operators';
import { AppModule } from './app.module';
import { MatChipInputEvent } from '@angular/material/chips';
import { LoginComponent } from './login/login.component';
import { TestBed, async, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent, Fruit } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {ApolloClientOptions} from '@apollo/client/core';
import {ApolloTestingModule,ApolloTestingController,} from 'apollo-angular/testing';
import { Router } from '@angular/router';
import { exit } from 'process';





describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let controller: ApolloTestingController;
  



  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,HttpClientModule,ApolloTestingModule,
        
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        
      ]

  
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);

    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'osg'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('osg');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('osg app is running!');
  // });

   
  it('Breadcrum routing', () => {

    const navigateSpy = spyOn(router, 'navigate');
    component.firmware();
    expect(navigateSpy).toHaveBeenCalledWith(['Firmware']);

  });

  it('Breadcrum routing', () => {
      let device;
    const navigateSpy = spyOn(router, 'navigate');
    component.deviceSearch(device );
    expect(navigateSpy).toHaveBeenCalledWith(['/deviceSearch', device]);

  });


it ('dashboard', ()=>{

component.dashboard();

});

// it('matchip input',()=>{
//   let event:MatChipInputEvent
//   expect(component.add(event)).toBeTruthy();
//   });


// it('On Navigation', fakeAsync(() => {

//   const navigateSpy = spyOn(router, 'navigate');
//   component.navigation();
//   tick(2000);
//   expect(navigateSpy).toHaveBeenCalledWith(['deviceSearch/single_device/1']);

// }));

// it('should',()=>{

//   component.exit();
//   tick(100);
//   expect(component.exit()). toHaveBeenCalledTimes(1)


// })

  
});


