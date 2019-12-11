import {Component, Input, OnInit} from '@angular/core';
import {Degree} from '../entity';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-degree',
  templateUrl: './update-degree.component.html',
//  styleUrls: ['./update-degree.component.css']
})
export class UpdateDegreeComponent implements OnInit {
  @Input() degree: Degree;

  constructor(
    private route: ActivatedRoute,
    private degreeService: UniversityService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.degreeService.getDegree(id)
      .subscribe(res => this.degree = res);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.degreeService.updateDegree(this.degree)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
