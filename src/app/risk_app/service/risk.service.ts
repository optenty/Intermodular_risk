import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Sala} from "../interfaces/Sala";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  constructor(private http: HttpClient) {
  }

  public url = "http://localhost:8090/api/risk/"



  // @ts-ignore
  getSalas(token: string): Observable<Sala[]> {
    // Configurar los encabezados de la solicitud con el token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token // Suponiendo que se use un esquema de autenticación Bearer
    });

    // Realizar la solicitud HTTP con los encabezados configurados
    return this.http.get<Sala[]>(this.url + '/salas', { headers: headers });
  }


  crearSala(){
    this.http.get<Sala>(this.url+'/crearsala').subscribe(response=>{
      console.log(response);
      return response;
    })
  }

  addPlayer(){
    this.http.get<Sala>(this.url+'/addplayer').subscribe(response=>{
      console.log(response);
      return response;
    })
  }


}
