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
  counter = 1;
  startBtnDisabled : boolean;
  runCounter: boolean =  true;
  stopBtnDisabled : boolean = true;
  resetBtnDisabled: boolean = true;
  countingCutomObservable = new Observable(observer => {
    setInterval(
      () => {
        // console.log(count)
        if(this.runCounter) 
        {
          observer.next(this.counter) 
          this.counter++;
        }
        if(this.counter == 0) {
          observer.complete()    
        }
      }, 1000)
    }) 
  constructor() {}
  ngOnInit(): void {
    
    
  }
  startCounter() {
      this.runCounter = true
      if(this.counter == 1) { 
          this.subscription = this.countingCutomObservable.subscribe(
          data => {
            // this.counter += +data;
            this.startBtnDisabled = true;
            this.stopBtnDisabled = false;
            this.resetBtnDisabled = false;
          })
      }
      this.startBtnDisabled = true;
      this.stopBtnDisabled = false;
      this.resetBtnDisabled = false;
  }
  stopCounter() {
    // this.subscription.unsubscribe()
    this.stopBtnDisabled = true;
    this.startBtnDisabled = false;
    this.runCounter = false;
  }
  resetCounter() {
    this.runCounter = false;
    this.counter = 0;
    this.subscription.unsubscribe()
    this.startBtnDisabled = false;
    this.resetBtnDisabled = true;
    this.stopBtnDisabled = true;
  }
  ngOnDestroy() {
    console.log("Observable-practise component destroyed!")
    this.subscription.unsubscribe()
  }

}
