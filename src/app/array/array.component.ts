import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  viaForEach: any;
  rawInput= '';
  constructor() { }
  testArray = ['1', '2', '3', '4', '5', '6'];
 
  ngOnInit(): void {

    console.log("Testing forEach, it is a array method")
    this.testArray.forEach(item => {console.log("\t", item, " now modifed via forEach's call back");})
    console.log("Is array same ?:", this.testArray)

    console.log("Testing toString(), array method")
    console.log('\t', 'String separeated String of the array is: ', this.testArray.toString())

    console.log("Testing join(), array method")
    console.log('\t', 'User defined delim separated string of array is: ', this.testArray.join("+"))

    console.log('Testing map(), array method')
    console.log("\t", "New array modified with map: ", this.testArray.map((item: string, index)=> item + index))

    console.log('Testing findIndex(), array method')
    console.log('\t', "Index of number creater than 4", this.testArray.findIndex(this.callback1))

    console.log('Testing find(), array method')
    console.log("\t", "Number greater than 4", this.testArray.find(this.callback1))

    console.log('Testing every(), array method')
    console.log('\t', "Is all number greater than -1", this.testArray.find(this.callback2))
  }
  callback1(num)
  {
      if(num > 4) {
        return num
      }
  }
  callback2(num)
  {
    if(num > -1) {
      return num
    }
  }

}
