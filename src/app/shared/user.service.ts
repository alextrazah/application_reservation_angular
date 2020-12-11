import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
  }

  addUser(data: any): Observable<any> {
    const url = 'http://localhost:3000/Users/';
    return this.http.post(url, data);
  }

  getallUser() {
    return this
      .http.get<any>('http://localhost:3000/Users/');
  }

  // tslint:disable-next-line:typedef
  getUserbyid(id: number) {
    return this.http.get('http://localhost:3000/Users/' + id);
  }

  Logout(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/Users/' + id;
    return this.http.put(url, data);
  }

  submit(form) {
    console.log(form);
    this.addUser(form)
      .subscribe(() => {
          console.log('eya');
          this.router.navigate(['/shop']);
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

  submit2(data, id) {
    this.Logout(data, id).subscribe(() => {
      }
    );

  }
}
