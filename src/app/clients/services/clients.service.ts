import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(environment.urlApi + '/clients');
  }

  // get collection()
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // set collection()
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  // changeState of item in collection
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.urlApi}/clients/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id in collection
}
