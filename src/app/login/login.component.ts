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

  constructor(public fire: AngularFireAuth, public router: Router) {}

  username: string;
  password: string;

  login(): void {
    this.fire.auth
      .signInWithEmailAndPassword(this.username, this.password)
      .then(value => {
        console.log('Logged!');
        this.router.navigate(['/home']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        alert(err.message);
      });
  }

  doRegister() {
    this.fire.auth
      .createUserWithEmailAndPassword('makercode@gmail.com', '123456')
      .catch(function(error) {
        console.log('registered');
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  doLogin() {
    this.fire.auth
      .signInWithEmailAndPassword('makercode@gmail.com', '123456')
      .catch(function(error) {
        console.log('registered');
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  ngOnInit() {}
}
