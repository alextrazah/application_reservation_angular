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
  getCategoriebyid(id: number) {
    return this.http.get('http://localhost:3000/Categories/' + id);
  }
  addCategorie(data: any): Observable<any> {
    const url = 'http://localhost:3000/Categories/';
    return this.http.post(url, data);
  }

  dellcat(id: number) {
    return this.http.delete('http://localhost:3000/Categories/' + id);
  }
  updateCategorie(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/Categories/' + id;
    return this.http.put(url, data);
  }
  search(q: string): Observable<any> {
    return this.http.get(
      'http://localhost:3000/' + 'Categories?nom_like=' + q
    );
  }
  submit(form) {

    this.addCategorie(form)
      .subscribe(() => {
          this.router.navigate(['/dashboard/cat']);
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
