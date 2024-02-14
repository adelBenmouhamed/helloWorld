import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ChangeHelloComponent } from './change-hello/change-hello.component';
import { HomeHelloComponent } from './home-hello/home-hello.component';
import { GetHelloComponent } from './get-hello/get-hello.component';
import { FormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { LoginComponent } from './login/login.component';



function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    setTimeout(() => {
      keycloak.init({
        config: {
          url: 'http://localhost:8888',
          realm: 'helloWorldRealm',
          clientId: 'helloWorldFront'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html'
        }
      });
    });
  };
}










@NgModule({
  declarations: [
    AppComponent,

    ChangeHelloComponent,
        HomeHelloComponent,
        GetHelloComponent,
        LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
