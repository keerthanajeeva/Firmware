import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be created', () => {

    let route;
    let state;
    let user;

expect(guard.canActivate(route,state)).toBeFalse()
expect(result).toBe(true);
if(user){

  var result= guard.canActivate
  expect(result).toBe(true);
}
else{
  const navigateSpy = spyOn(router, 'navigate');
  expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  expect(guard.canActivate(route,state)).toBeTrue()
  expect(result).toBe(false);
}
    
  });

});
