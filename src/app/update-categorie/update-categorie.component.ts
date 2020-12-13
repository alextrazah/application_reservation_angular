import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../shared/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  id;
  form: FormGroup;
  profilePicture: string = null;
  errorMsg: string;
  files: string = null;
  var;
  Categories;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private servicecategorie: CategorieService) {

    this.form = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.servicecategorie.getCategoriebyid(this.id).subscribe((result) => {
      this.Categories = result;
      this.form.patchValue(this.Categories);
    });
  }
  submit() {

    this.servicecategorie
      .updateCategorie(this.form.value, this.id)
      .subscribe(() => {
        this.router.navigate(['/dashboard/cat']);
      });

  }
  get nom(){
    return this.form.get('nom');
  }
  // tslint:disable-next-line:typedef
  get type(){
    return this.form.get('type');
  }

}
