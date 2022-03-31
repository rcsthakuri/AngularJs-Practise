import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  @Input() testForm;
  user = {
    username: '',
    email: '',
    gender: '',
    country: '',
    message: '',
  };
  submitMsg;
  showData: Boolean = false;
  constructor() { }

  ngOnInit(): void {}
  showFormData() {
    this.showData = true;
    console.log(this.testForm)
    this.user.username = this.testForm.userData.name;
    this.user.email = this.testForm.userData.email;
    this.user.gender = this.testForm.gender;
    this.user.country = this.testForm.country;
    this.user.message = this.testForm.textbox;
    // this.submitMsg = "Form is submitted successfully."
    console.log(this.testForm)
  }

}
