import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../shared/categorie.service';
import {EventService} from '../shared/event.service';
import {Event} from '../Model/events';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
@Output() k: string;
@Output() send = new EventEmitter();

quant = 0 ;
  Categories;
  var;
  bb: [];
  id: number;
  j;
  image ='/assets/flame.png';
nombres;

  constructor(private servicecategorie: CategorieService, private activatedRoute: ActivatedRoute, private nm: EventService) { }

  ngOnInit(): void {
    this.servicecategorie.getallCategorie()
      .subscribe(
        (data) => {
          this.Categories = data;
          this.var = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );


    this.nm.getallevent()
      .subscribe(
        (data) => {
          this.var = data;
        }
        ,
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );

  }
  clickon(i: string ){
    this.send.emit(i);
    // console.log(i);
  }

  num(j: string){
let c = 0;
let h: number;
h = this.var.length;
for (let i = 0; i < h; i++) {
// tslint:disable-next-line:triple-equals
if (this.var[i].categorie == j) {
 c++;
}
    }
console.log(j);
return c;
  }


}
