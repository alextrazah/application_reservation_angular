import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Categorie} from '../Model/Categorie';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient, private router: Router) {
  }
  // tslint:disable-next-line:typedef
  getallcategories() {
    return this .http.get<Categorie[]>('./assets/Categorie.json');
  }

  getallCategorie() {
    return this
      .http.get<any>('http://localhost:3000/Categories/');
  }
  addCategorie(data: any): Observable<any> {
    const url = 'http://localhost:3000/Categories/';
    return this.http.post(url, data);
  }
  submit(form) {

    this.addCategorie(form)
      .subscribe(() => {
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
}
