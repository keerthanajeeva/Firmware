
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutboundService {

  constructor(private http: HttpClient) { }

  outbound() {
    return this.http.get<any>(`${environment._outboundapi}`).pipe(map(user => {
     
      return user;
  }));
  }
  multipleDevice(deviceList) {
    return this.http.post<any>(`${environment._multipleDeviceapi}`,deviceList).pipe(map(user => {
     
      return user;
  }));
  }
}
