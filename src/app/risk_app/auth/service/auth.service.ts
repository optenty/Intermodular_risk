import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IUser} from "../../interfaces/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;

  private loadSesssionStorage():void{
    if(sessionStorage.getItem('session')){
      this.isLogged=true;
    }
  }

  constructor(private http: HttpClient) {
    this.loadSesssionStorage();
  }

  private apiUrl = "http://localhost:8090/api/auth/"


  userURLspring = `${this.apiUrl}login`;
  resgistreURL = `${this.apiUrl}nuevo`;
  existeCampURL = `${this.apiUrl}existeCampamento`

  loginUser(user: IUser):Observable<object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer'
    });
    //<<
    // return this.http.post(`${this.userURLspring}`, user,  { headers: headers });

    return this.http.post(`${this.userURLspring}`, user);
  }

  registerUser(user: IUser){
    return this.http.post<IUser>(`${this.resgistreURL}`, user);
  }




}
