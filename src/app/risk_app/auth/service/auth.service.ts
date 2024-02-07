import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IUser} from "../../interfaces/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:8090/api/auth/"


  userURLspring = `${this.apiUrl}login`;
  resgistreURL = `${this.apiUrl}nuevo`;
  existeCampURL = `${this.apiUrl}existeCampamento`

  loginUser(user: IUser):Observable<object>{
    const headers = new HttpHeaders().set('Origin', 'http://localhost:4200'); // Reemplaza esto con la URL correcta de tu aplicación Angular
    return this.http.post(`${this.userURLspring}`, user,  { headers: headers });
  }

  registerUser(user: IUser){
    return this.http.post<IUser>(`${this.resgistreURL}`, user);
  }



  isLogged() {
    return false;
    // return sessionStorage.getItem('session') !== null;
  }
}
