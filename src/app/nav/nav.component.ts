import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  Users;
  id;
vaar;
  constructor(private serviceuser: UserService, private activatedRoute: ActivatedRoute ,  private router: Router) {
  }

  ngOnInit(): void {
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
  Logout(id)
  {
    this.serviceuser.getUserbyid
    (id)
      .subscribe(
        data => {
          this.vaar = data;
          this.id = this.vaar.id;

          console.log('this.vaar');

          this.vaar.connected = 0;
          console.log(this.vaar.connected);

          this.serviceuser
            .submit2(this.vaar , this.id);
        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;




  }

}
