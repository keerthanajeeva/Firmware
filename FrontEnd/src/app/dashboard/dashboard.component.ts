import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  element: HTMLElement;
  toggleActive(event:any){}
   
  
//    if(this.element !== undefined){
//      this.element.style.backgroundColor = "#F5F5F5";
//      this.element.style.color = "#666666";
//    } 
//    var target = event.currentTarget;
//    target.style.backgroundColor = "#005F9E";
//    target.style.color = "white"
//    this.element = target;
//  }

 
  firmware(){
    this.router.navigate(['Firmware']);
  }
}
