import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Participation} from '../Model/participation';
import {UserService} from '../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  myForm: FormGroup;
  events;
  date;
  places;
  description;
  image;
  categorie;
Users;
id;
name : string = "noone";
  constructor(private fb: FormBuilder,public serviceevent: EventService,  private serviceuser: UserService, private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.myForm.valueChanges.subscribe(console.log);

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

          for (let i = 0; i < data.length; i++) {
            if (data[i].connected == 1) {

              this.name=data[i].id;
            }
          }
          console.log(this.Users);
          console.log(this.name);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );
  }

 participer(ideve){
    this.getuser();
    const newParticipation = new Participation(ideve, this.name);
    this.serviceevent.addP(newParticipation);

 }
  get nom(){
    return this.myForm.get('nom');
  }
  // tslint:disable-next-line:typedef
  get type(){
    return this.myForm.get('type');
  }

 getuser(){
   let k=0;
   let h: number;

   h = this.Users.length;
   let c=0;

   for (let i = 0; i < h; i++) {
     if (this.Users[i].connected == 1) {
       c =1 ;
       this.name=this.Users[i].id;
     }
   }
 }

}
