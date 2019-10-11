import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service'
import { HttpClient } from '@angular/common/http';
import { ContactService } from './contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phone: string;
  cEmail: string;
  city: string;
  state: string;
  zip: string;
  address: string;

  fName: string = '';
  lName: string = '';
  email: string = '';
  message: string = '';
  constructor(private http: HttpClient, private cs: ContactService) { }
  emailService = new EmailService(this.http);

  ngOnInit() {
    this.phone = this.cs.getPhone();
    this.cEmail = this.cs.getEmail();
    this.address = this.cs.getAddress();
    this.city = this.cs.getCity();
    this.state = this.cs.getState();
    this.zip = this.cs.getZip();
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
