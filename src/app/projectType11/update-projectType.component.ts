import {Component, Input, OnInit} from '@angular/core';
import {Degree, ProjectType} from '../entity';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-projecttype',
  templateUrl: './update-projectType.component.html',
//  styleUrls: ['./update-degree.component.css']
})
export class UpdateProjectTypeComponent implements OnInit {
  @Input() projectType: ProjectType;

  constructor(
    private route: ActivatedRoute,
    private projectTypeService: UniversityService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.projectTypeService.getProjectType(id)
      .subscribe(res => this.projectType = res);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.projectTypeService.updateProjectType(this.projectType)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
