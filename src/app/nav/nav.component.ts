import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {FormBuilder, NgForm} from '@angular/forms';
import {User} from '../Model/User';
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
  var1;
  user : User;
  varse =0 ;

  constructor(private fb: FormBuilder,private serviceuser: UserService, private activatedRoute: ActivatedRoute ,  private router: Router) {
  }

  ngOnInit(): void {
    this.serviceuser.getallUser()
      .subscribe(
        (data) => {

          this.Users = data;

          let h = data.length;

          for (let i = 0; i < h; i++) {
            if (data[i].connected == 1) {
              this.user = data[i];
              this.varse=1;
            }

          }
          console.log("this.user");
          console.log(this.user);
          console.log("this.user");
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

  getco(){
    let k=0;
    let h: number;

    h = this.Users.length;
    let c=0;

    for (let i = 0; i < h; i++) {
      if (this.Users[i].connected == 1) {
        c =1 ;
        return this.Users[i];
      }
      else return c;
    }

    }


  goin1(form){

    const {id, username , email , role, password , repassword} = form.value;
    console.log(form.value);
    const newUser = new User(id, username, email, role, password);
    this.serviceuser.submit(newUser);

  }
onSubmit2(form2){
  let k=0;
  let h: number;

  h = this.Users.length;
  let c=0;

  for (let i = 0; i < h; i++) {
// tslint:disable-next-line:triple-equals
    if (this.Users[i].username == form2.value.username1) {
      k==i;
      console.log(k);
      if(this.Users[k].password == form2.value.password1){
        this.Login(this.Users[k].id);
        c=1;
        this.router.navigate(['/shop']) .then(() => {
          window.location.reload();
        });

      }
    }
  }
  console.log(form2.value.username);
  console.log(form2);
  return c;
}
  Login(id)
  {
    this.serviceuser.getUserbyid
    (id)
      .subscribe(
        data => {
          this.var1 = data;
          this.id = this.var1.id;

          console.log('this.var1');

          this.var1.connected = 1;
          console.log(this.var1.connected);

          this.serviceuser
            .submit3(this.var1 , this.id);
        }, error => {

          console.log(error);
          alert('id not found');
        }
      )
    ;
  }


}
