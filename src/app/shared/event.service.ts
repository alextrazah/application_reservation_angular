import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Event} from '../Model/events';
import {Observable} from 'rxjs';
import {Participation} from '../Model/participation';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  vars;

  constructor(private http: HttpClient, private router: Router) {
  }
  // tslint:disable-next-line:typedef

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
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
  addparticipation(data: any): Observable<any>  {
    const url = 'http://localhost:3000/Participation/';
    console.log(data);
    return this.http.post(url, data);
  }
  addP(participation: Participation): Observable<Participation> {
    console.log(this.http.post<Participation>('http://localhost:3000/Participation/', participation, this.httpOptions));
    return this.http.post<Participation>('http://localhost:3000/Participation/', participation, this.httpOptions);
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

  participer(form ,id_user,id_eve) {
    form.nom=id_eve;
    form.type=id_user;

    this.getEventbyid(id_eve).subscribe(
      data => {
        console.log('this.vaar');
        this.vars=data;
        this.vars.places--;
        console.log(this.vars);
        this.vars.dis=id_user;
        this.updateEvent(this.vars,id_eve).subscribe(() => {
          this.router.navigateByUrl('/shop', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/blog']);
          });
        });
      }, error => {

        console.log(error);
        alert('id not found');
      }
    )
    ;
  }
  upplace(data: any, id: any){
    console.log("jdidaaa");
    data.places=data.places+"";
    console.log(data);
    console.log(id);
    this.updateEvent(data,id);
  }
}
