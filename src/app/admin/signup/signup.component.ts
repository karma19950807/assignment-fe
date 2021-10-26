import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AdminModel } from '../admin.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authModelObj: AdminModel = new AdminModel();

  userInfoForm: FormGroup = new FormGroup({});

  constructor(
    private authService: AdminService,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userInfoForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required]],
      location: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password1: ['', [Validators.required]],
    });
  }

  postUserInfo() {
    this.authModelObj.fullname = this.userInfoForm.value.fullname;
    this.authModelObj.email = this.userInfoForm.value.email;
    this.authModelObj.phoneno = this.userInfoForm.value.phoneno;
    this.authModelObj.location = this.userInfoForm.value.location;
    this.authModelObj.username = this.userInfoForm.value.username;
    this.authModelObj.password = this.userInfoForm.value.password;
    this.authModelObj.password = this.userInfoForm.value.password1;

    this.authService.postUserInfo(this.authModelObj).subscribe(
      (res) => {
        console.log(res);
        this._snackbar.open('Sign up is successful');
        //this.userInfoForm.reset();
        this.router.navigate(['/admin/signin']);
      },
      (err) => {
        this._snackbar.open('Soemthing went wrong');
      }
    );
  }
}
