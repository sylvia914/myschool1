import {Component, Input, OnInit} from '@angular/core';
import { ProjectCategory} from '../entity';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-projectcategory',
  templateUrl: './update-projectCategory.component.html',
//  styleUrls: ['./update-degree.component.css']
})
export class UpdateProjectCategoryComponent implements OnInit {
  @Input() projectGategory: ProjectCategory;

  constructor(
    private route: ActivatedRoute,
    private projectGategoryService: UniversityService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.projectGategoryService.getProjectCategory(id)
      .subscribe(res => this.projectGategory = res);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.projectGategoryService.updateProjectCategory(this.projectGategory)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
