import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  genders = ['male', 'female'];
  myReactiveForm: FormGroup;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl(null),
      country: new FormControl(null),
      message: new FormControl(null)
    })
  }
  onSubmit() {
    console.log(this.myReactiveForm)
  }

}
