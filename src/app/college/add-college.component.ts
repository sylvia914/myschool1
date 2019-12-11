import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {UniversityService} from '../university.service';
import { College } from '../entity';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {
  @Input() college: College;
  constructor(
    private route: ActivatedRoute,
    private schoolService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  save(description: string, no: string, remarks: string): void { //多个文本框数据
    this.college = {id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim()};
    if (!description) { return; }
    this.schoolService.addCollege(this.college)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
