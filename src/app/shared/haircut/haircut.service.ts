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
    return this.http.get('//https://beauty-bar-java.herokuapp.com//api/haircut/list');
  }
  getById(id): Observable<any> {
    return this.http.get('//https://beauty-bar-java.herokuapp.com//api/haircut/get/' + id);
  }
  create(haircut): Observable<any> {
    const obsResp = this.http.post<any>('//https://beauty-bar-java.herokuapp.com//api/haircut/create/',
      haircut, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
  update(haircut): Observable<any> {
    const obsResp = this.http.post<any>('//https://beauty-bar-java.herokuapp.com//api/haircut/update/',
      haircut, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
  delete(id): Observable<any> {
    return this.http.delete('//https://beauty-bar-java.herokuapp.com//api/haircut/delete/' + id);
  }
}
