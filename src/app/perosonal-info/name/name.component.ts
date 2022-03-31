import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  searchName;
  personalInfo;
  constructor(private route: ActivatedRoute, private dataService : DataService ) { }

  ngOnInit(): void {
    this.searchName = this.route.snapshot.params['name']
    this.personalInfo = this.dataService.personalInfo.find(x => x.name == this.searchName)
    console.log(this.personalInfo)

  }

}
