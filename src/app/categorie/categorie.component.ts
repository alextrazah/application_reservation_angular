import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../shared/categorie.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
@Output() k : string;
@Output() send = new EventEmitter();


  Categories;
  id : number;
nombres;

  constructor(private servicecategorie: CategorieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicecategorie.getallCategorie()
      .subscribe(
        (data) => {
          this.Categories = data;
          console.log(this.Categories);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );
  }
  clickon(i:string){
    this.send.emit(i);
   // console.log(i);
  }

}
