import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Sala} from "../interfaces/Sala";
import {PartidaList} from "../interfaces/PartidaList";
import {Zonas} from "../interfaces/zonas";
import {response} from "express";
import {Observable, Subject} from "rxjs";
import {UnaPartida} from "../interfaces/UnaPartida";
import {AtaqueRequest} from "../interfaces/AtaqueRequest";

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  /*
  * Partides
  * /api/risk/partidas
  * /api/risk/partidas/{id}
  * /api/risk/crearpartida
  * */


  /*
  * Sala
  * /api/risk/salas
  * /api/risk/crearsala
  * /api/risk/addplayer
  * */


  /*
  * Zonas
  * /api/risk/zonas
  * /api/risk/crearzonas
  * /api/risk/atacar
  * /api/risk/{idZona}/asignar-tropas
  * */
  constructor(private http: HttpClient) {
  }

  public url = "http://localhost:8090/api/risk"

  private salasSubject: Subject<Sala> = new Subject<Sala>();


  getSalas(token: string): Subject<Sala> {
    // Configurar los encabezados de la solicitud con el token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token // Suponiendo que se use un esquema de autenticación Bearer
    });
    // Realizar la solicitud HTTP con los encabezados configurados
    this.http.get<Sala>(this.url + '/salas', { headers: headers }).subscribe(
      (data: Sala) => {
        // Cuando se recibe una respuesta del servidor, se emite en el Subject
        this.salasSubject.next(data);
      },
      (error) => {
        // Manejar errores aquí si es necesario
        console.error('Error al obtener las salas:', error);
      }
    );
    // Devolver el Subject
    return this.salasSubject;
  }
  crearSala(token: string): Observable<Sala> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<Sala>(this.url + '/crearsala', {},{ headers: headers });
  }




  addPlayerToSala(salaId: number, playerId: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    const params = new HttpParams()
      .set('salaId', salaId.toString())
      .set('playerId', playerId.toString());
    return this.http.post<any>(this.url + '/addplayer', params, { headers: headers });
  }



  getAllPartidas(pageable: any): Observable<PartidaList> {
    return this.http.get<PartidaList>(`${this.url}/partidas`, { params: pageable });
  }

  getPartidaById(id: number): Observable<UnaPartida> {
    return this.http.get<UnaPartida>(`${this.url}/partidas/${id}`);
  }

  createPartida(): Observable<any> {
    return this.http.post(`${this.url}/crearpartida`, {});
  }


  getAllZonas(pageable: any): Observable<Zonas> {
    return this.http.get<Zonas>(`${this.url}/zonas`);
  }

  createZonas(zonas: Zonas): Observable<Zonas> {
    return this.http.post<Zonas>(`${this.url}/crearzonas`, zonas);
  }

  atacarZona(ataqueRequest: AtaqueRequest): Observable<string> {
    return this.http.post<string>(`${this.url}/atacar`, ataqueRequest);
  }

  asignarTropasAZona(idZona: number, cantidadTropas: number): Observable<string> {
    return this.http.post<string>(`${this.url}/${idZona}/asignar-tropas`, { cantidadTropas });
  }

}
