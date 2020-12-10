import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CategorieService} from '../shared/categorie.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  myForm: FormGroup;
  profilePicture: string = null;
  errorMsg: string;

  constructor(private fb: FormBuilder, public Categorieservice: CategorieService , private router: Router) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {


  }
  get nom(){
    return this.myForm.get('nom');
  }
  // tslint:disable-next-line:typedef
  get type(){
    return this.myForm.get('type');
  }

}
