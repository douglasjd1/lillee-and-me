import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendMessage(message: {firstName: string; lastName: string, email: string, message: string}) {
    return this.http.post('https://lillee-and-me.firebaseio.com/posts.json', message);
  } //commment
}
