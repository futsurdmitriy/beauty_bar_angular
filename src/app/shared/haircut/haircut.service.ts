import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from '../models/client/client.model';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

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
  create(haircut): Observable<any> {
    const obsResp = this.http.post<any>('//localhost:8080/api/haircut/create/',
      haircut, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
  update(haircut): Observable<any> {
    const obsResp = this.http.post<any>('//localhost:8080/api/haircut/update/',
      haircut, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
  delete(id): Observable<any> {
    return this.http.delete('//localhost:8080/api/haircut/delete/' + id);
  }
}
