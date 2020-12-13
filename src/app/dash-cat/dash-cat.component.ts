import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../shared/categorie.service';
import {EventService} from '../shared/event.service';
@Component({
  selector: 'app-dash-cat',
  templateUrl: './dash-cat.component.html',
  styleUrls: ['./dash-cat.component.css']
})
export class DashCatComponent implements OnInit {

  quant = 0 ;
  Categories;
  var;
  bb: [];
  id: number;
  j;
  nombres;
  searchvalue;
  constructor(private servicecategorie: CategorieService, private activatedRoute: ActivatedRoute, private nm: EventService , private  router: Router) { }

  ngOnInit(): void {
    this.servicecategorie.getallCategorie()
      .subscribe(
        (data) => {
          this.Categories = data;
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
  num(j: string) {
    let c = 0;
    let h: number;
    h = this.var.length;
    for (let i = 0; i < h; i++) {
      if (this.var[i].categorie == j) {
        c++;
      }
    }
   return c;
  }
  onsearch(){
    this.servicecategorie.search(this.searchvalue).subscribe(
      (data) => {
        if ( this.searchvalue != null) {
          this.Categories = data;
        }
      }
    );
  }

  dell(id){
    this.servicecategorie.dellcat(id) .subscribe(data => this.router.navigate(['/dashboard/cat']));
    this.Categories = this.Categories.filter(item => item.id != id);;
  }
}
