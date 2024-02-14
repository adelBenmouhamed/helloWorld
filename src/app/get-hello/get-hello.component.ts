import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { KeycloakProfile } from 'keycloak-js';


@Component({
  selector: 'app-get-hello',
  templateUrl: './get-hello.component.html',
  styleUrl: './get-hello.component.css'
})
export class GetHelloComponent implements OnInit {

  message: string | undefined;

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {

    
    this.helloService.getHello().subscribe(message => {
      this.message = message;
    });


  }

}
