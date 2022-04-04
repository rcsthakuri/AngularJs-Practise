import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { CommonModule } from '@angular/common';
import { DialogComponentExampleComponent } from './dialog-component-example/dialog-component-example.component';
import { FormsModule } from '@angular/forms';

const material = [
  MatStepperModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule
]


@NgModule({
  imports: [material, CommonModule, FormsModule],
  exports: [material],
  declarations: [
    DialogComponentExampleComponent
  ]
})
export class MaterialModule { }
