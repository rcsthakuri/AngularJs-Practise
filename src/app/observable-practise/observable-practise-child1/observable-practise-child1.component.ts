import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { ObservableTestService } from 'src/app/observable-test.service';

@Component({
  selector: 'app-observable-practise-child1',
  templateUrl: './observable-practise-child1.component.html',
  styleUrls: ['./observable-practise-child1.component.css']
})
export class ObservablePractiseChild1Component implements OnInit {
  myCustomSubscription: Subscription;
  showObsData: String;
  // dataTranformData = {
  //   name: 'ramchandra shahi thakuri',
  //   age: 25,
  // }
  myCustomObservable = new Observable(
    observer => {
      observer.next('This is new value')
    }
  )
  constructor(public observableService: ObservableTestService) { }

  ngOnInit(): void {
    this.myCustomSubscription = this.myCustomObservable.pipe(map(data => { return String(data).toUpperCase()})).subscribe(obsData => this.showObsData = obsData)
  }
  msgToParentViaEEmiter() {
    console.log('msgToParent handler')
    this.observableService.messageEmitter.emit(this.observableService.messageFromChild);
  }
  msgToParentViaSub() {
    console.log('msgToParent handler')
    this.observableService.messageEmitter.next(this.observableService.messageFromChild);
  }

}
