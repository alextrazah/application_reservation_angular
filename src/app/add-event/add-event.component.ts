import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {EventService} from '../shared/event.service';
import {Router} from '@angular/router';
import {CategorieService} from '../shared/categorie.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  myForm: FormGroup;
  profilePicture: string = null;
  errorMsg: string;
  var;
  Categories;
  constructor(private fb: FormBuilder, public eventservice: EventService , private router: Router, private servicecategorie: CategorieService) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      date: ['', Validators.required],
      places: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      categorie: ['', Validators.required],
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {
    this.servicecategorie.getallCategorie()
      .subscribe(
        (data) => {
          this.Categories = data;
          this.var = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );

  }
  get nom(){
    return this.myForm.get('nom');
  }
  // tslint:disable-next-line:typedef
  get type(){
    return this.myForm.get('type');
  }
  get date(){
    return this.myForm.get('date');
  }
  // tslint:disable-next-line:typedef
  get places(){
    return this.myForm.get('places');
  }
  get image(){
    return this.myForm.get('image');
  }
  get description(){
    return this.myForm.get('description');
  }
  get categorie(){
    return this.myForm.get('categorie');
  }
  handleProfilePictureInput(file) {
    this.getBase64(file[0])
      .subscribe(str => this.profilePicture = str);
  }
  getBase64(file): Observable<string> {
    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        sub.next(reader.result.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    });
  }
}
