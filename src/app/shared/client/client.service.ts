import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/client/list');
  }
  getById(id): Observable<any> {
    return this.http.get('//localhost:8080/api/client/get/' + id);
  }

  create(object): Observable<any> {
    return this.http.post('//localhost:8080/api/client/create/', object);
  }
}
