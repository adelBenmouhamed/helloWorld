import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-home-hello',
  templateUrl: './home-hello.component.html',
  styleUrl: './home-hello.component.css'
})
export class HomeHelloComponent implements OnInit  {
  public profile! : KeycloakProfile;
  constructor(public keycloakService : KeycloakService) {
  }
  ngOnInit(): void {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
  }
}
