import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Event} from '../Model/events';
import {Observable} from 'rxjs';
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
  getcat() {
    return this
      .http.get<any>('http://localhost:3000/events/');
  }
  countevent(){
  return this.getallevent();
  }
  addEvent(data: any): Observable<any> {
    const url = 'http://localhost:3000/events/';
    return this.http.post(url, data);
  }

  submit(form) {

    this.addEvent(form)
      .subscribe(() => {
          this.router.navigate(['/list']);
        },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }


          }
        }
      );
  }
}
