import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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
  submitMsg;
  @ViewChild(FormDataComponent) child: FormDataComponent;
  private msgSource= new BehaviorSubject(0);
  formSubmitted = this.msgSource.asObservable()

  changeSubmitStatus(x: number) {
    this.msgSource.next(x)
  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl(null),
      country: new FormControl(null),
      textbox: new FormControl(null)
    })
  }
  ngAfterViewInit() {
    console.log(this.child);
    
  }
  onSubmit() {
    console.log(this.child)
    this.changeSubmitStatus(1)
    this.submitMsg = "Form is submitted successfully."

    // this.child.testForm = this.myReactiveForm.value
    // this.child.showFormData();
    // this.myReactiveForm.reset()
  }

}
