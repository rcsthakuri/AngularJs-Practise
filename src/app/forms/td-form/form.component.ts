import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDataComponent } from '../form-data/form-data.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f') testForm: NgForm
  @ViewChild(FormDataComponent) child: FormDataComponent;
  defaultCountry = "india";
  textBoxContent = '';
  submitMsg = '';
  genders = ['male', 'female'];
  formData: Object;
  suggestUserName() {
    const suggestedName = 'Ramchandra';
    this.testForm.form.patchValue({
      userData: {
        name: suggestedName
      }
    })
  }
  ngAfterViewInit() {
    console.log(this.child);
    
  }
  onSubmit() {
    console.log(this.child)
    console.log('form submitted');
    this.child.submitMsg = "Form is submitted successfully."
    this.child.testForm = this.testForm.value
    this.child.showFormData();
    this.testForm.reset()
  }

}