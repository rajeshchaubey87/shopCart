import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // vaiable define here

  @ViewChild('f') signUpForm: NgForm;
  gender = 'female';
  aboutUs = '';
  submitted = false;
  userDetails = {
    username:'',
    Email:'',
    gender:'',
    aboutUs:''
  }

  qualifications = ['Graduate','PostGraduate','HSC', 'SSC']



  constructor() { }

  ngOnInit(): void {
  }

  onChangeData() {

    console.log(this.signUpForm.value, 'data is change')
  }


  loginForm() {
    console.log(this.signUpForm.value)
    this.submitted = true;
    this.userDetails.username = this.signUpForm.value.userData.username;
    this.userDetails.Email = this.signUpForm.value.userData.Email;
    this.userDetails.gender = this.signUpForm.value.gender;
    this.userDetails.aboutUs = this.signUpForm.value.aboutUs;
    this.signUpForm.reset();
  }

  fillDataSignUpForm() {
    this.signUpForm.form.patchValue({

      userData:{
          username:"Rajesh Kumar Chaubey",
          Email:'rcmxsan@gmail.com'
        }

    })



  }

}
