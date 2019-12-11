import { Component, OnInit } from '@angular/core';
import {Degree, ProjectStatus} from '../entity';
import {UniversityService} from '../university.service';

@Component({
  selector: 'app-status',
  templateUrl: './projectStatus.component.html',
 // styleUrls: ['./degree.component.css']
})
export class ProjectStatusComponent implements OnInit {
  projectStatuss: ProjectStatus[];
  constructor(private projectStatusService: UniversityService) { }

  ngOnInit() {
    this.getProjectStatuss();
  }
  getProjectStatuss(): void {
    this.projectStatusService.getProjectStatuss()
      .subscribe(res => this.projectStatuss = res);
  }
  delete(degree: Degree | number): void {
    this.projectStatuss = this.projectStatuss.filter(h => h !== degree);
    this.projectStatusService.deleteProjectStatus(degree).subscribe(res => alert(res.message));
  }
}
