import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcService {
  private jsonUrl = '../../assets/upc_operativas.json';


  constructor(private http: HttpClient) {}

  getUpcs(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

}
