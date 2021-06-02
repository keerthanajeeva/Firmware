import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpgradecommandService {

  constructor(private http: HttpClient,
    private _router: Router) { }

  PublishedVersion(data) {
    return this.http.post<object>(`${environment._publishVersion}`, data).pipe(map(user => {
     
      return user;
  }));
  }

  IotDeviceOutBound(data,deviceID){
    return this.http.put(`${environment._deviceOutbound}/iot-stg/1.0/shadow/46952541-3269-45fb-9f93-386bbe17372d-${deviceID}`, data).pipe(map(user => {
      
      return user;
  }));
  }

  GetIotDeviceOutBound(){
    let headers = new HttpHeaders({
       '*' : 'Access-Control-Allow-Origin'
    })

    return this.http.get<any>(`${environment._getDevice}`,{ headers: headers }).pipe(map(user => {
     
      return user;
  }));
  }
}
