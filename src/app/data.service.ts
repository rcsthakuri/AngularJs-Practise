import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  personalInfo = [
    {
    name: 'Ramchandra Shahi Thakuri',
    dob: '1998 May 14',
    address: 'Kawasoti'
    },
    {
      name: 'Anjan Thapa',
      dob: '1998 April 20',
      address: 'Tanahun'
      },
      

]
  constructor() { }
}
