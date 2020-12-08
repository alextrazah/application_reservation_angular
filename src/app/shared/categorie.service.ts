import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Categorie} from '../Model/Categorie';

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
}
