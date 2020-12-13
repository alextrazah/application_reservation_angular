import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CategorieService} from '../shared/categorie.service';
import {Categorie} from '../Model/categorie';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id;
  Event;
  form: FormGroup;
  profilePicture: string = null;
  errorMsg: string;
  files: string = null;
  var;
  Categories;
  constructor(private fb: FormBuilder,
              private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router,
              private servicecategorie: CategorieService) {

    this.form = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      date: ['', Validators.required],
      places: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      categorie: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.eventService.getEventbyid(this.id).subscribe((result) => {
      this.Event = result;
      this.form.patchValue(this.Event);
    });
    this.servicecategorie.getallCategorie()
      .subscribe(
        (data) => {
          this.Categories = data;
          console.log(this.Categories);
          this.var = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      );

  }
  submit() {

    this.eventService
      .updateEvent(this.form.value, this.id)
      .subscribe(() => {
        this.router.navigate(['/dashboard/event']);
      });

  }
  get nom(){
    return this.form.get('nom');
  }
  // tslint:disable-next-line:typedef
  get categorie(){
    return this.form.get('categorie');
  }
  // tslint:disable-next-line:typedef
  get date(){
    return this.form.get('date');
  }
  // tslint:disable-next-line:typedef
  get description(){
    return this.form.get('description');
  }
  // tslint:disable-next-line:typedef
  get image(){
    return this.form.get('image');
  }
  // tslint:disable-next-line:typedef
  get places(){
    return this.form.get('places');
  }
  // tslint:disable-next-line:typedef
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
