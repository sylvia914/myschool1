import {Component, Input, OnInit} from '@angular/core';
import { ProjectStatus} from '../entity';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-projectstatus',
  templateUrl: './update-projectStatus.component.html',
//  styleUrls: ['./update-degree.component.css']
})
export class UpdateProjectStatusComponent implements OnInit {
  @Input() projectStatus: ProjectStatus;

  constructor(
    private route: ActivatedRoute,
    private projectStatusService: UniversityService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.projectStatusService.getProjectStatus(id)
      .subscribe(res => this.projectStatus = res);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.projectStatusService.updateProjectStatus(this.projectStatus)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
