import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormDataComponent } from '../form-data/form-data.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  genders = ['male', 'female'];
  myReactiveForm: FormGroup;
  @ViewChild(FormDataComponent) child: FormDataComponent;
  
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
  ngAfterViewInit() {
    console.log(this.child);
    
  }
  onSubmit() {
    console.log(this.child)
    this.child.submitMsg = "Form is submitted successfully."
    this.child.testForm = this.myReactiveForm.value
    this.child.showFormData();
    this.myReactiveForm.reset()
  }

}
