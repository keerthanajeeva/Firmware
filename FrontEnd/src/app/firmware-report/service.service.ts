import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,
    private _router: Router) { }

  deviceSearch(page){
    return this.http.get<any>(`${environment._deviceWithPagination}`+page+``).pipe(map(user => {
     
      return user;
  }));
  }
}
