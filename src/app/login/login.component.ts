import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  authService: any;

  constructor(public fire: AngularFireAuth, public router: Router) { }

  username: string;
  password: string;

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["/home"]);
      console.log('yep');
    } else {
      alert("Invalid credentials");
      console.log('no');
    }
  }

  doRegister() {
    this.fire.auth.createUserWithEmailAndPassword("makercode@gmail.com", "123456").catch(function (error) {
      console.log("registered");
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  doLogin() {
    this.fire.auth.signInWithEmailAndPassword("makercode@gmail.com", "123456").catch(function (error) {
      console.log("registered");
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  ngOnInit() {
  }

}
