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
    return this.http.get('//localhost:8080/api/order/list');
  }
  getById(id): Observable<any> {
    return this.http.get('//localhost:8080/api/order/get/' + id);
  }

  create(object): Subscription {
    return this.http.post<any>('//localhost:8080/api/order/create/', object).subscribe({
      next: data => this.postId = data,
      error: error => console.error('There was an error', error)
    });
  }
  delete(id): Observable<any> {
    return this.http.delete('//localhost:8080/api/order/delete/' + id);
  }
}
