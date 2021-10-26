import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({});

  dataUsers: any;
  constructor(
    private authService: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe((res) => {
      this.dataUsers = res;
    });
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    //debugger;
    let name = this.signinForm.value.username;
    let pass = this.signinForm.value.password;
    if (
      this.dataUsers.filter(function (e: any) {
        return e.username === name && e.password === pass;
      }).length > 0
    ) {
      this._snackbar.open('You have successfully logged in');
      console.log('success');
      this.router.navigate(['/parcels/list']);
      //debugger;
    } else {
      this._snackbar.open('Unable to log in');
    }
  }

  props(key: string) {
    return this.signinForm.get(key) as FormControl;
  }
}
