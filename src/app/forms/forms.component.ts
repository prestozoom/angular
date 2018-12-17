import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.registerForm = this.formBuilder.group({
  'fname': [this.user.fname, [ Validators.required ]],
  'lname': [this.user.lname, [ Validators.required ]],
  'uname': [this.user.uname, [ Validators.required ]],
  'email': [this.user.email, [ Validators.required, Validators.email]],
  'password': [this.user.password, [ Validators.required ]],
});

  }
  onRegisterSubmit () {
    alert('Registered Succefully');

  }

}
