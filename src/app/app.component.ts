import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  public profile! : KeycloakProfile;
constructor(public keycloakService : KeycloakService) {
  }

  ngOnInit() {


  }
  async handleLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }
  handleLogout(){
    this.keycloakService.logout(window.location.origin);
  }

  }





