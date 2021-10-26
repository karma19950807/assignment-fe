import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { EditParcelComponent } from './edit-parcel/edit-parcel.component';
import { ListParcelComponent } from './list-parcel/list-parcel.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';

const routes: Routes = [
  {
    path: 'parcels',
    outlet: 'parcels',
    children: [
      { path: '', component: ListParcelComponent },
      { path: 'list', component: ListParcelComponent },
      { path: 'view/:id', component: ViewParcelComponent },
      { path: 'edit/:id', component: EditParcelComponent },
      { path: 'delete/:id', component: ListParcelComponent },
      { path: 'add', component: AddParcelComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcelsRoutingModule {}
