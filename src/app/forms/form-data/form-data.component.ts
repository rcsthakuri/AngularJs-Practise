import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  @Input('testform') testForm;
  @Input('submitMsg') submitMsg;
  @Input('obsD') obs;
  user = {
    username: '',
    email: '',
    gender: '',
    country: '',
    message: '',
  };
  showData: Boolean = false;
  subscription: Subscription;
  submitStatus = 0
  constructor() { }

  ngOnInit(): void {
    console.log('haha', this.obs)
    // as we are using BehaviorSubject, we can subscribe to it and it will emit the latest value and implmented on reactive form only so we use try catch
    // for td-form, approach is different
    try {
      this.subscription = this.obs.subscribe(status => status === 1 ? this.showFormData() : this.showData = false)
    } 
    catch (error) {
      console.log(error)
    }
  }
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
