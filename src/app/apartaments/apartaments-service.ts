import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data-model';

@Injectable({
  providedIn: 'root',
})
export class ApartamentsService {

  private baseApiUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  getApartaments(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/apartaments`);
  }
  
  delApartaments(idRecord: number): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/apartaments/${idRecord}`);
  }
  
}
