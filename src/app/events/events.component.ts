import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../Model/events';
import {Categorie} from '../Model/categorie';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  cate : Categorie;
  @Input() event_type: string;
  @Output() reserve = new EventEmitter();
  events;
  type_e: string ;
  searchvalue;
  constructor(private serviceevent: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.type_e = this.event_type;
    this.serviceevent.getallevent()
      .subscribe(
        (data) => {
          this.events = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );
  }
  onsearch(){
    this.serviceevent.search(this.searchvalue).subscribe(
      (data) => {
        if ( this.searchvalue != null) {
          this.events = data;
        }
      }
    );
  }
  clickon(){
    console.log(this.event_type);
  }
}
