import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  saved: boolean = false;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;

  constructor(private cs: ContactService) { }

  ngOnInit() {
    this.phone = this.cs.getPhone();
    this.email = this.cs.getEmail();
    this.address = this.cs.getAddress();
    this.city = this.cs.getCity();
    this.state = this.cs.getState();
    this.zip = this.cs.getZip();
  }

  updateContactInfo() {
    this.cs.setPhone(this.phone);
    this.cs.setEmail(this.email);
    this.cs.setAddress(this.address);
    this.cs.setCity(this.city);
    this.cs.setState(this.state);
    this.cs.setZip(this.zip);
    this.saved = true;
  }
}
