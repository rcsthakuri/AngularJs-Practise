import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentExampleComponent } from './dialog-component-example/dialog-component-example.component';

export interface DialogData {
  data1: string;
  data2: string;
}
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  data1 = 'data1';
  data2 = 'data2';
  personalInfoPassed= false;
  infoCorrect = false;
  formData =
  {
    userData: { name: '', email: '',},
    gender: '',
    country: '',
    textbox: '',
  };
  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponentExampleComponent, {
      width: '250px',
      data: {data1: this.data1, data2: this.data2}
    });
    dialogRef.afterClosed().subscribe( result => this.data2 = result)
  }
  onSubmit(event: any) {
    this.personalInfoPassed = true;
    console.log('ok', event.value)
    this.formData = event.value;
  }
  onOkData() {
    this.infoCorrect = true;
  }
}
