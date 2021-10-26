import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ParcelsModel } from '../parcels/parcels.model';
import { Parcels } from '../parcels/list-parcel/list-parcel.component';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  baseUrl: string = 'http://localhost:3000/parcels';

  constructor(private http: HttpClient) {}

  listParcels() {
    return this.http.get<Parcels[]>(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  viewParcel(id: number) {
    return this.http.get<Parcels>(this.baseUrl + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addParcel(data: any) {
    return this.http.post<Parcels>(this.baseUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteParcel(id: number) {
    return this.http.delete<Parcels>(this.baseUrl + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  editParcel(id: number, data: ParcelsModel) {
    debugger;
    return this.http.put<Parcels>(this.baseUrl + '/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
