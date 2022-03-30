import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  tdf: Boolean;
  rf: Boolean;
  showForm(formType: String) {
    if(formType === 'tdf') {
      this.tdf= true;
      this.rf = false;
    }
    else if(formType === 'rf')
    {
      this.tdf = false;
      this.rf = true;
    }
  }
}
