import { Component } from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'risk-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = this.authService.isLogged();
  constructor(private authService: AuthService){

  }

}
