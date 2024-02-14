import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-hello',
  templateUrl: './change-hello.component.html',
  styleUrl: './change-hello.component.css'
})
export class ChangeHelloComponent implements OnInit{
  helloMessage: string ='' ;
  constructor(private helloService: HelloService,private router :Router) { }
  ngOnInit(): void {
    this.helloService.getHello().subscribe(helloMessage => {
      this.helloMessage = helloMessage;
    });
  }
  submitHello() {
    console.log('Submitted hello message:', this.helloMessage);

    // Call the postHello method to send the updated hello message to the server
    this.helloService.postHello(this.helloMessage).subscribe(response => {
      // Handle the response if needed
     // console.log('Response:', response);

    });
    this.router.navigate(['/home-hello']);
}
}
