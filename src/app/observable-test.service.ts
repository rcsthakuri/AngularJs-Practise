import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableTestService {
  messageFromChild: String = '';
  messageEmitter = new EventEmitter<String>()
  messageSubject = new Subject<string>()
  constructor() { }

}
