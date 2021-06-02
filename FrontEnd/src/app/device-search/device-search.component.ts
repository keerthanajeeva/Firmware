import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-device-search',
  templateUrl: './device-search.component.html',
  styleUrls: ['./device-search.component.css']
})
export class DeviceSearchComponent implements OnInit {

  id
  deviceType
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.deviceType = params['device'];
      localStorage.setItem('deviceType',this.deviceType)
     
    });
  }


  single(){
    this.id=1
    this.router.navigate(['deviceSearch/single_device/',this.id]);
  }
  multi(){
    this.id=2
    this.router.navigate(['deviceSearch/single_device/',this.id]); 
  }

  dash(){
    this.router.navigate(['Firmware']);
  }
}
