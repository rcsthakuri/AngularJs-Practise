import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableTestService {
  eventEmitter = new EventEmitter<String>()
  constructor() { }

}
