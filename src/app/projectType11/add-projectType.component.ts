import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';
import {Degree, ProjectType} from '../entity';

@Component({
  selector: 'app-add-projecttype',
  templateUrl: './add-projectType.component.html',
//  styleUrls: ['./add-degree.component.css']
})
export class AddProjectTypeComponent implements OnInit {
  @Input() projectType: ProjectType;
  constructor(
    private route: ActivatedRoute,
    private projectTypeService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  save(description: string, no: string, remarks: string): void { // 多个文本框数据
    this.projectType = {id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim()};
    if (!description) { return; }
    this.projectTypeService.addProjectType(this.projectType)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
