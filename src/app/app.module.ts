import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

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

const appRoutes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'tdf',
    component: FormComponent
  },
  {
    path: 'rf',
    component: ReactiveFormComponent
  },
  {
    path: 'personal-info',
    component: PerosonalInfoComponent
  },
  {
    path: 'personal-info/:name',
    component: NameComponent
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  },
  { 
    path: '**', redirectTo: '/page-not-found'
  }
]
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
