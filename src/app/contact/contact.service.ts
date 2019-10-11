import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    phone: string = 'xxx-xxx-xxxx';
    email: string = 'my@email.com';
    address: string = '1234 Main St.'
    city: string = 'Conway';
    state: string = 'AR';
    zip: string = '72034';

    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

    getAddress() {
        return this.address;
    }

    getCity() {
        return this.city
    }

    getState() {
        return this.state;
    }

    getZip() {
        return this.zip;
    }

    setPhone(p: string) {
        this.phone = p;
    }

    setEmail(e: string) {
        this.email = e;
    }

    setAddress(a: string) {
        this.address = a;
    }
    
    setCity(c: string) {
        this.city = c;
    }

    setState(s: string) {
        this.state = s;
    }

    setZip(z: string) {
        this.zip = z;
    }
 }