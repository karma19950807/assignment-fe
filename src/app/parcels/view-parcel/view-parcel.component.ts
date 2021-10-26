import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcelsService } from 'src/app/services/parcels.service';

@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrls: ['./view-parcel.component.css'],
})
export class ViewParcelComponent implements OnInit {
  productData: any;
  userId: number = 0;

  constructor(
    private productService: ParcelsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.viewParcel();
  }
  viewParcel() {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
    });

    this.productService.viewParcel(this.userId).subscribe((res) => {
      this.productData = res;
    });
  }
}
