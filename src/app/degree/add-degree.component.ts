import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';
import {Degree} from '../entity';

@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
//  styleUrls: ['./add-degree.component.css']
})
export class AddDegreeComponent implements OnInit {
  @Input() degree: Degree;
  constructor(
    private route: ActivatedRoute,
    private degreeService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  save(description: string, no: string, remarks: string): void { // 多个文本框数据
    this.degree = {id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim()};
    if (!description) { return; }
    this.degreeService.addDegree(this.degree)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
