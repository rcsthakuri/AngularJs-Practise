import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormComponent } from './forms/td-form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NameComponent } from './perosonal-info/name/name.component';
import { PerosonalInfoComponent } from './perosonal-info/perosonal-info.component';

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
