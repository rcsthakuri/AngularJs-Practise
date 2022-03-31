import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-perosonal-info',
  templateUrl: './perosonal-info.component.html',
  styleUrls: ['./perosonal-info.component.css'],
  providers: [DataService]
})
export class PerosonalInfoComponent implements OnInit {
  personalInfoArray;
  searchName;
  constructor(
    private dataService: DataService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.personalInfoArray = this.dataService.personalInfo;
    // console.log(this.personalInfo.length())
  }
  navigateSearch() {
    this.router.navigate(['/personal-info/' + this.searchName])
  }

}
