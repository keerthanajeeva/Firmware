import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadCFirmwareService {

  constructor(private http: HttpClient) { }

  createCFirmware(data) {
    return this.http.post<any>(`${environment._firmwareUpload}`, data).pipe(map(user => {
      
      return user;
  }));
  }
}
