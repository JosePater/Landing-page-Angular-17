import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<any> {
    return this._http.get(this.urlBase);
  }

  getProductId(id: number): Observable<any> {
    return this._http.get(`${this.urlBase}/${id}`);
  }
}
