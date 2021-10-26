import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcelsRoutingModule } from './parcels-routing.module';
import { ParcelsComponent } from './parcels.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { EditParcelComponent } from './edit-parcel/edit-parcel.component';
import { ListParcelComponent } from './list-parcel/list-parcel.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ParcelsComponent,
    AddParcelComponent,
    EditParcelComponent,
    ListParcelComponent,
    ViewParcelComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ParcelsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [
    ParcelsComponent,
    AddParcelComponent,
    EditParcelComponent,
    ListParcelComponent,
    ViewParcelComponent,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
  ],
})
export class ParcelsModule {}
