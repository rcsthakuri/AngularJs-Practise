import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './forms/td-form/form.component';
import { FormDataComponent } from './forms/form-data/form-data.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { PerosonalInfoComponent } from './perosonal-info/perosonal-info.component';
import { ToStringPipe } from './to-string.pipe';
import { NameComponent } from './perosonal-info/name/name.component';
import { FormsComponent } from './forms/forms.component';
import { FontColorChangerDirective } from './directive/font-color-changer.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablePractiseComponent } from './observable-practise/observable-practise.component';
import { ObservablePractiseChild1Component } from './observable-practise/observable-practise-child1/observable-practise-child1.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDataComponent,
    ReactiveFormComponent,
    PerosonalInfoComponent,
    NameComponent,
    ToStringPipe,
    FormsComponent,
    FontColorChangerDirective,
    PageNotFoundComponent,
    ObservablePractiseComponent,
    ObservablePractiseChild1Component,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
