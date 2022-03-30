import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f') testForm: NgForm
  defaultCountry = "india";
  textBoxContent = '';
  submitMsg = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    gender: '',
    country: '',
    message: '',
  }
  suggestUserName() {
    const suggestedName = 'Ramchandra';
    // this.testForm.setValue({
    //   userData: {
    //     name: suggestedName,
    //     email: ''
    //   },
    //   country: 'nepal',
    //   textbox: 'setting textbox value',
    //   gender: 'male'
    // })
    this.testForm.form.patchValue({
      userData: {
        name: suggestedName
      }
    })
  }
  onSubmit() {
    console.log('form submitted');
    console.log(this.testForm);
    this.user.username = this.testForm.value.userData.name;
    this.user.email = this.testForm.value.userData.email;
    this.user.gender = this.testForm.value.gender;
    this.user.country = this.testForm.value.country;
    this.user.message = this.testForm.value.textbox;
    this.submitMsg = "Form is submitted successfully."
    this.testForm.reset()
  }

}