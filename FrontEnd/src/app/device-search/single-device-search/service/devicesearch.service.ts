
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StylePaginatorDirective } from '../style-paginator.directive';

@Injectable({
  providedIn: 'root'
})
export class DevicesearchService {
  constructor(private http: HttpClient,
    private _router: Router) { }

  searchDetails() {
    return this.http.get<any>(`${environment._fwdashboard}`).pipe(map(user => {
     
      return user;
  }));
  }

  getVersionDetails() {
    return this.http.get<any>(`${environment._dashboard}`).pipe(map(user => {
     
      return user;
  }));
  }

  devicePagination(page){
    return this.http.get<any>(`${environment._deviceWithPagination}`+page+``).pipe(map(user => {
     
      return user;
  }));
  }

 
  PublishedVersion(data) {
    return this.http.put<object>(`${environment._publishVersion}`, data).pipe(map(user => {
     
      return user;
  }));
  }
}
