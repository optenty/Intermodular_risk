import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    return this.http.post(`${this.userURLspring}`, user);
  }

  registerUser(user: IUser){
    return this.http.post<IUser>(`${this.resgistreURL}`, user);
  }



  isLogged() {
    return false;
    // return sessionStorage.getItem('session') !== null;
  }
}
