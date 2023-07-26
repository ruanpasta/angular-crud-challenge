import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://demo4529396.mockable.io/clients'

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
