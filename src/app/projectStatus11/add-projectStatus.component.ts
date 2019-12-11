import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';
import {Degree, ProjectStatus} from '../entity';

@Component({
  selector: 'app-add-projectstatus',
  templateUrl: './add-projectStatus.component.html',
//  styleUrls: ['./add-degree.component.css']
})
export class AddProjectStatusComponent implements OnInit {
  @Input() projectStatus: ProjectStatus;
  constructor(
    private route: ActivatedRoute,
    private projectStatusService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  save(description: string, no: string, remarks: string): void { // 多个文本框数据
    this.projectStatus = {id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim()};
    if (!description) { return; }
    this.projectStatusService.addProjectStatus(this.projectStatus)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
