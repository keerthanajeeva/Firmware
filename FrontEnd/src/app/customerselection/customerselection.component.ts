import { NgForm ,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { OutboundService } from '../outbound-status/outbound.service'
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';
import { Observable, of } from 'rxjs'


export type customer={
Name: string
ID: number
fk_OEMID: number
ParentCustomerID: number
fk_CustomerTypeId:number
InsertUTC:number
}
export type DataQuery ={
customer:customer[]
}
export type customeraccountrelationshipQuery={
ID:number
AccountName:string
fk_DealerId:number
fk_CustomerId:number
BSSID:number
InsertUTC:number
}
export type DataQuery1 ={
customeraccountrelationshipQuery:customeraccountrelationshipQuery[]
}


@Component({
selector: 'app-customerselection',
templateUrl: './customerselection.component.html',
styleUrls: ['./customerselection.component.css']
})


export class CustomerselectionComponent implements OnInit {
buttonDisabled:boolean=true;
public customer;
public customeraccountrelationshipQuery
public customerValue;
constructor(private apollo: Apollo, private router: Router,private _auth: AuthenticationService, private outbound: OutboundService,) { }
selectedSub;
public mail
showDiv:boolean=false;


ngOnInit(): void {
const source$ = this.apollo.query
<DataQuery>
({
query: gql`
{
customer {
Name
ID
fk_OEMID
ParentCustomerID
fk_CustomerTypeId
InsertUTC
}
}`
}).pipe(shareReplay(1))
source$.pipe(map(result => result.data && result.data.customer)).subscribe((data) => this.customer = data);
// const source1$ = this.apollo.query
// <DataQuery1>
// ({
// query: gql`
// {customeraccountrelationshipQuery{
// ID
// AccountName
// fk_DealerId
// fk_CustomerId
// BSSID
// InsertUTC
// }}`
// }).pipe(shareReplay(1))
// source1$.pipe(map(result => result.data && result.data.customeraccountrelationshipQuery)).subscribe((data) => this.customeraccountrelationshipQuery = data);  
this.mail = localStorage.getItem('mail')
}


reset(){
this.selectedSub='';
this.customerValue='';
this.buttonDisabled=true;
}
change(){
this.router.navigate(['dashboard'])
}
}









