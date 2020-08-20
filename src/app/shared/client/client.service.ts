import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Client} from '../models/client/client.model';
// import {HandleError, HttpErrorHandler} from '../../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})


export class ClientService {
  response;
  // private handleError: HandleError;

  constructor(
    private http: HttpClient){
    // httpErrorHandler: HttpErrorHandler) {
    // this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getAll(): Observable<any> {
    return this.http.get('https://beauty-bar-java.herokuapp.com/api/client/list');
  }

  getById(id): Observable<any> {
    return this.http.get('https://beauty-bar-java.herokuapp.com/api/client/get/' + id);
  }

  create(client: Client): Observable<Client> {
    const obsResp = this.http.post<Client>('https://beauty-bar-java.herokuapp.com/api/client/create/',
      client, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
  update(haircut): Observable<any> {
    const obsResp = this.http.post<any>('https://beauty-bar-java.herokuapp.com/api/client/update/',
      haircut, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
  delete(id): Observable<any> {
    return this.http.delete('https://beauty-bar-java.herokuapp.com/api/client/delete/' + id);
  }
}
