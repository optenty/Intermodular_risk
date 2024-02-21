import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss'
})
export class LogoutPageComponent {
  constructor(private authService: AuthService, private router: Router) {



  }

  confirmLogout(){
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('user');
    this.authService.isLogged=false;
    this.router.navigate(['/']);
  }

}
