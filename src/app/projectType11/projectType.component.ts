import { Component, OnInit } from '@angular/core';
import { ProjectType} from '../entity';
import {UniversityService} from '../university.service';

@Component({
  selector: 'app-projecttype',
  templateUrl: './projectType.component.html',
 // styleUrls: ['./degree.component.css']
})
export class ProjectTypeComponent implements OnInit {
  projectTypes: ProjectType[];
  constructor(private projectTypeService: UniversityService) { }

  ngOnInit() {
    this.getProjectTypes();
  }
  getProjectTypes(): void {
    this.projectTypeService.getProjectTypes()
      .subscribe(res => this.projectTypes = res);
  }
  delete(projectType: ProjectType | number): void {
    this.projectTypes = this.projectTypes.filter(h => h !== projectType);
    this.projectTypeService.deleteProjectType(projectType).subscribe(res => alert(res.message));
  }
}
