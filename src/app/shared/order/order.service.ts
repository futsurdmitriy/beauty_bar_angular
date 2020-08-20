import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  postId;
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//https://beauty-bar-java.herokuapp.com//api/order/list');
  }
  getById(id): Observable<any> {
    return this.http.get('//https://beauty-bar-java.herokuapp.com//api/order/get/' + id);
  }

  create(object): Subscription {
    return this.http.post<any>('//https://beauty-bar-java.herokuapp.com//api/order/create/', object).subscribe({
      next: data => this.postId = data,
      error: error => console.error('There was an error', error)
    });
  }
  delete(id): Observable<any> {
    return this.http.delete('//https://beauty-bar-java.herokuapp.com//api/order/delete/' + id);
  }
}
