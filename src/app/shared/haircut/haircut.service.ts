import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaircutService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/haircut/list');
  }
  getById(id): Observable<any> {
    return this.http.get('//localhost:8080/api/haircut/get/' + id);
  }
}
