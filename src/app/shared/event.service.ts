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
  getEventbyid(id) {
    return this.http.get('http://localhost:3000/events/' + id);
  }
  countevent(){
  return this.getallevent();
  }
  addEvent(data: any): Observable<any> {
    const url = 'http://localhost:3000/events/';
    return this.http.post(url, data);
  }
  dellEvent(id: number) {
    return this.http.delete('http://localhost:3000/events/' + id);
  }
  updateEvent(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/events/' + id;
    return this.http.put(url, data);
  }
  search(q: string): Observable<any> {
    return this.http.get(
      'http://localhost:3000/' + 'events?nom_like=' + q
    );
  }

  submit(form) {

    this.addEvent(form)
      .subscribe(() => {
          this.router.navigate(['/dashboard/event']);
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
