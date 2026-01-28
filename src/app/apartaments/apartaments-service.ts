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
  
  getApartament(id: number): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/apartaments/${id}`);
  }
  
  delApartaments(idRecord: number): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/apartaments/${idRecord}`);
  }

  addApartament(data: object): any {
    return this.http.post(`${this.baseApiUrl}/apartaments`, data);
  }
  
  modApartament(data: object): any {
    return this.http.patch(`${this.baseApiUrl}/apartaments`, data);
  }

  search(queryData: {column: string, partQuery: string}) {
    // console.log(nameColumn, inputNameText)
    console.log(queryData)
    return this.http.post(`${this.baseApiUrl}/apartaments/search/`, queryData);
  }
  
}
