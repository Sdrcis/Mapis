import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diversidad } from '../mapis/diversidades/diversidades.module';

@Injectable({
  providedIn: 'root',
})
export class UpcService {
  private upcUrl = 'assets/upc_operativas.json';
  private uvcUrl = 'assets/unidades_vigilancia_comunitaria.json';
  private diversidadesUrl = 'assets/diversidades_sexuales_genero.json';

  constructor(private http: HttpClient) {}

  getUpcs(): Observable<any[]> {
    return this.http.get<any[]>(this.upcUrl);
  }

  obtenerUVCs(): Observable<any[]> {
    return this.http.get<any[]>(this.uvcUrl);
  }

  // obtenerDiversidades(): Observable<any[]> {
  //   return this.http.get<any>(this.diversidadesUrl);
  // }
  obtenerDiversidades(): Observable<Diversidad> {
    return this.http.get<Diversidad>(
      'assets/diversidades_sexuales_genero.json'
    );
  }

  abrirEnNuevaPestana(url: string): void {
    window.open(url, '_blank');
  }
}
