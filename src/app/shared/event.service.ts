import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Event} from '../Model/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient, private router: Router) {
  }
  // tslint:disable-next-line:typedef
  getallevents() {
    return this .http.get<Event[]>('./assets/event.json');
  }

  getallevent() {
    return this
      .http.get<any>('http://localhost:3000/events/');
  }
}
