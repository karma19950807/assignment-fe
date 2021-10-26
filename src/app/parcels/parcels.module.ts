import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcelsRoutingModule } from './parcels-routing.module';
import { ParcelsComponent } from './parcels.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { EditParcelComponent } from './edit-parcel/edit-parcel.component';
import { ListParcelComponent } from './list-parcel/list-parcel.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';


@NgModule({
  declarations: [
    ParcelsComponent,
    AddParcelComponent,
    EditParcelComponent,
    ListParcelComponent,
    ViewParcelComponent
  ],
  imports: [
    CommonModule,
    ParcelsRoutingModule
  ]
})
export class ParcelsModule { }
