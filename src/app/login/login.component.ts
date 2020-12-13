import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, NgForm} from '@angular/forms';
import {User} from '../Model/User';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  vars = '';

  userr = '' ;
  pass = '' ;
  users;
  vaar;
  id ;
  constructor(private fb: FormBuilder, public userService: UserService , private router: Router) {
  }
  ngOnInit(): void {
    this.userService.getallUser()
      .subscribe(
        (data) => {

          this.users = data;
          console.log(this.users);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );
  }

  onSubmit(form){

    const {id, username , email , role, password , repassword} = form.value;
    console.log(form.value);
    const newUser = new User(id, username, email, role, password);
    this.userService.submit(newUser);

  }

  onSubmit2(form2){
    let k=0;
    let h: number;

    h = this.users.length;
    let c=0;

    for (let i = 0; i < h; i++) {
// tslint:disable-next-line:triple-equals
      if ("admin"== form2.value.email && "admin"== form2.value.password ) {
        window.open('http://localhost:4200/dashboard/cat', '_blank');
      }

     else if (this.users[i].username == form2.value.email) {
        k=i;
        console.log(k);
        if(this.users[k].password == form2.value.password){
          this.Login(this.users[k].id);
          c=1;
         console.log(this.users[k].id);
        }
      }
    }
    console.log(form2.value.email);
    console.log(form2.value.password);
    return c;


  }

  Login(id)
  {
    this.userService.getUserbyid
    (id)
      .subscribe(
        data => {
          this.vaar = data;
          this.id = this.vaar.id;

          console.log('this.vaar');

          this.vaar.connected = 1;
          console.log(this.vaar.connected);

          this.userService
            .submit2(this.vaar , this.id);
        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;
  }

}
