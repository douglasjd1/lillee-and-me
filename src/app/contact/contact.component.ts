import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fName: string = '';
  lName: string = '';
  email: string = '';
  message: string = '';
  constructor(private http: HttpClient) { }
  emailService = new EmailService(this.http);
  ngOnInit() {
  }

  sendMessage() {
    var emDets = {
      firstName: this.fName,
      lastName: this.lName,
      email: this.email,
      message: this.message
    }

    this.emailService.sendMessage(emDets);
  }

  getMessages() {
    this.emailService.getMessages();
  }

}
