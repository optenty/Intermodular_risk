import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'risk-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges{
  isLoggedIn: boolean = this.authService.isLogged;
  constructor(private authService: AuthService){

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoggedIn = this.authService.isLogged;
  }

}
