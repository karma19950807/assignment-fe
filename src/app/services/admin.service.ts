import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminModule } from '../admin/admin.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  urlBase: string = 'http://localhost:3000/admin';
  constructor(private http: HttpClient) {}

  postUserInfo(data: any) {
    return this.http.post<AdminModule>(this.urlBase, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUsers() {
    return this.http.get<AdminModule>(this.urlBase).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
