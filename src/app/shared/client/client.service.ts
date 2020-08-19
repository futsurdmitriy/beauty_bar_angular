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
    return this.http.get('//localhost:8080/api/client/list');
  }

  getById(id): Observable<any> {
    return this.http.get('//localhost:8080/api/client/get/' + id);
  }

  create(client: Client): Observable<Client> {
    const obsResp = this.http.post<Client>('//localhost:8080/api/client/create/',
      client, httpOptions);
    return obsResp.pipe(
      tap( (fetchJSON) => JSON.stringify(fetchJSON) )
    );
  }
}
