import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../Model/events';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  events
  nom;
  date;
  places;
  description;
  image;
  categorie;
Users;
  constructor(private serviceevent: EventService,  private serviceuser: UserService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this
      .serviceevent
      .getEventbyid
      (this.activatedRoute.snapshot.params['id'])
      .subscribe(
        data => {
          this.events = data;
          console.log(this.events);
          this.nom = this.events.name;
          this.date = this.events.date;
          this.description = this.events.description;
          this.places = this.events.like;
          this.image = this.events.image;




        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;
    this.serviceuser.getallUser()
      .subscribe(
        (data) => {

          this.Users = data;
          console.log(this.Users);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );
  }


}
