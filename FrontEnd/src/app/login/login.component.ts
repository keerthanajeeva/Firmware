import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId
  password
  constructor(private router: Router,private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(accountForm: NgForm)
  {
   const usersVal = {
     email: this.emailId,
     password: this.password
   }
    if(accountForm.valid)
    {
      //this.router.navigate(['customerselection']);
      //console.log(user)
      this._auth.loginUser(usersVal).pipe(first())
      .subscribe(
        res => {
          localStorage.setItem('token', res.access_token)
          this.router.navigate(['customerselection']);
        },
    
      ) 

      localStorage.setItem('mail',this.emailId);
     
    
      
    }
    else
    {
      return;
    }

  }
}
