import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { College } from '../entity';
import {UniversityService} from '../university.service';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styleUrls: ['./update-college.component.css']
})
export class UpdateCollegeComponent implements OnInit {
  @Input() college: College;

  constructor(
    private route: ActivatedRoute,
    private schoolService: UniversityService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.schoolService.getCollege(id)
      .subscribe(res => this.college = res);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.schoolService.updateCollege(this.college)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
