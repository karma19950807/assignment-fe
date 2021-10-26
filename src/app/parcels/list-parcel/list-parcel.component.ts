import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcelsService } from 'src/app/services/parcels.service';
import { ParcelsModel } from '../parcels.model';

export interface Parcels {
  id: number;
  tracking_no: string;
  palce_of_booking: string;
  pobox_no: number;
  to: string;
  from: string;
  weight: number;
  amount: number;
  datetime: string;
}

const ELEMENT_DATA: Parcels[] = [];

@Component({
  selector: 'app-list-parcel',
  templateUrl: './list-parcel.component.html',
  styleUrls: ['./list-parcel.component.css'],
})
export class ListParcelComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tracking_no',
    'place_of_booking',
    'pobox_no',
    'to',
    'from',
    'weight',
    'amount',
    'datetime',
    'actions',
  ];
  dataSource = ELEMENT_DATA;

  // listProducts: Observable<object>;
  parcelLists: Parcels[] = [];

  onClickEditForm!: FormGroup;

  productModelObj: ParcelsModel = new ParcelsModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ParcelsService,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listParcels();
  }
  delete(id: number) {
    this.productService.deleteParcel(id).subscribe(
      (res) => {
        this._snackbar.open('Product was deleted successfully');
        this.listParcels();
      },
      (err) => {
        this._snackbar.open('Unable to delete the product');
      }
    );
  }

  deleteProduct() {
    // this.activatedRoute.params.subscribe((data) => {
    //   this.userId = data.id;
    // });
    // this.productService.deleteProduct(this.userId).subscribe(
    //   (res) => {
    //     this._snackbar.open('Product was deleted successfully');
    //     this.router.navigate(['http://localhost:4200/products/list']);
    //   },
    //   (err) => {
    //     this._snackbar.open('Unable to delete the product');
    //   }
    // );
  }

  listParcels() {
    this.productService.listParcels().subscribe((res) => {
      this.parcelLists = res;
    });
  }
}
