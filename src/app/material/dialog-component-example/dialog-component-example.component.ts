import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData} from '../material.component';

@Component({
  selector: 'app-dialog-component-example',
  templateUrl: './dialog-component-example.component.html',
  styleUrls: ['./dialog-component-example.component.css']
})
export class DialogComponentExampleComponent {
  constructor(
    public dialogref: MatDialogRef<DialogComponentExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}