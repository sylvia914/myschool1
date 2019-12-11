import { Component, OnInit } from '@angular/core';
import { Degree} from '../entity';
import {UniversityService} from '../university.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
 // styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {
  degrees: Degree[];
  constructor(private degreeService: UniversityService) { }

  ngOnInit() {
    this.getDegrees();
  }
  getDegrees(): void {
    this.degreeService.getDegrees()
      .subscribe(res => this.degrees = res);
  }
  delete(degree: Degree | number): void {
    this.degrees = this.degrees.filter(h => h !== degree);
    this.degreeService.deleteDegree(degree).subscribe(res => alert(res.message));
  }
}
