import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../Model/events';
import {Categorie} from '../Model/categorie';
@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {
  @Input() val: string;
  vars:string ;


  constructor() { }

  ngOnInit(): void {
  }
  get_type(k:string){
   // console.log(k);
    this.vars = k;
  }

}
