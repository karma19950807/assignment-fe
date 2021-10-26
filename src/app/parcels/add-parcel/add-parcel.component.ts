import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParcelsService } from 'src/app/services/parcels.service';
import { ParcelsModel } from '../parcels.model';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css'],
})
export class AddParcelComponent implements OnInit {
  productsModelObj: ParcelsModel = new ParcelsModel();

  addProductForm: FormGroup = new FormGroup({});

  constructor(
    private productService: ParcelsService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      tracking_no: ['', [Validators.required], Validators.minLength(13)],
      place_of_booking: ['', [Validators.required]],
      pobox_no: ['', [Validators.required]],
      to: ['', [Validators.required]],
      from: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
    });
  }

  addParcel() {
    this.productsModelObj.tracking_no = this.addProductForm.value.tracking_no;
    this.productsModelObj.place_of_booking =
      this.addProductForm.value.place_of_booking;
    this.productsModelObj.pobox_no = this.addProductForm.value.pobox_no;
    this.productsModelObj.to = this.addProductForm.value.to;
    this.productsModelObj.from = this.addProductForm.value.from;
    this.productsModelObj.weight = this.addProductForm.value.weight;
    this.productsModelObj.amount = this.addProductForm.value.amount;
    this.productsModelObj.datetime = this.addProductForm.value.datetime;

    this.productService.addParcel(this.productsModelObj).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open('Successfully added a new product');
        this.addProductForm.reset();
      },
      (err) => {
        this._snackBar.open('Something went wrong');
      }
    );
  }
}
