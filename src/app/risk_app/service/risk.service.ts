import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
  getSalas():Sala[]{
     this.http.get<Sala>(this.url+'/salas').subscribe(response=>{
       console.log(response);
       return response;
     })
  }



}
