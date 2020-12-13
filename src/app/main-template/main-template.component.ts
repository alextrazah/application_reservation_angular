import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, NgForm} from '@angular/forms';
import {User} from '../Model/User';
import {UserService} from '../shared/user.service';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {
  @Input() val: string;
  vars = '';
events;
  userr = '' ;
  pass = '' ;
  users;
  vaar;
  id ;
  constructor(private fb: FormBuilder, public userService: UserService , private router: Router,private serviceevent: EventService ) {
  }

  ngOnInit(): void {
    this.userService.getallUser()
      .subscribe(
        (data) => {

          this.users = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );
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




  get_type(k: string){
    // console.log(k);
    this.vars = k;
  }

  onSubmit(form){

    const {id, username , email , role, password , repassword} = form.value;
    console.log(form.value);
    const newUser = new User(id, username, email, role, password);
    this.userService.submit(newUser);

  }


}
