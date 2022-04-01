import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-practise',
  templateUrl: './observable-practise.component.html',
  styleUrls: ['./observable-practise.component.css']
})
export class ObservablePractiseComponent implements OnInit, OnDestroy {
  // Creating custom observable for counting number
  // https://www.youtube.com/watch?v=X_QZq_X_QZs  (1:00:00)
  subscription : Subscription;
  counter = 0;
  startBtnDisabled : boolean;
  stopBtnDisabled : boolean = true;
  resetBtnDisabled: boolean = true;
  countingCutomObservable = new Observable(observer => {
    let count = 0;
    setInterval(
      () => {
        // console.log(count)
        observer.next(count)
        count++;
      }, 1000)
    }) 
  constructor() {}
  ngOnInit(): void {
    
    
  }
  startCounter() {
      this.subscription = this.countingCutomObservable.subscribe(
      data => {
        this.counter += +data;
        this.startBtnDisabled = true;
        this.stopBtnDisabled = false;
        this.resetBtnDisabled = false;
       })
  }
  stopCounter() {
    this.subscription.unsubscribe()
    this.startBtnDisabled = false;
  }
  resetCounter() {
    this.subscription.unsubscribe()
    this.counter = 0;
    this.startBtnDisabled = false;
    this.stopBtnDisabled = true;
  }
  ngOnDestroy() {
    console.log("Observable-practise component destroyed!")
    this.subscription.unsubscribe()
  }

}
