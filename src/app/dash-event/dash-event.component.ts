import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../Model/events';
import {Categorie} from '../Model/categorie';

@Component({
  selector: 'app-dash-event',
  templateUrl: './dash-event.component.html',
  styleUrls: ['./dash-event.component.css']
})
export class DashEventComponent implements OnInit {
  events;
  type_e: string ;
  searchvalue;
  constructor(private serviceevent: EventService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.serviceevent.getallevent()
      .subscribe(
        (data) => {
          this.events = data;
          console.log(this.events);
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

  supprimer(id){
    this.serviceevent
      .dellEvent(id)
      .subscribe(data => this.router.navigate(['/dashboard/event']));
    this.events = this.events.filter(item => item.id != id);
  }
}
