import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';
import { ProjectCategory} from '../entity';

@Component({
  selector: 'app-add-projectcategory',
  templateUrl: './add-projectCategory.component.html',
//  styleUrls: ['./add-degree.component.css']
})
export class AddProjectCategoryComponent implements OnInit {
  @Input() projectGategory: ProjectCategory;
  constructor(
    private route: ActivatedRoute,
    private projectGategoryService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  save(description: string, no: string, remarks: string): void { // 多个文本框数据
    this.projectGategory = {id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim()};
    if (!description) { return; }
    this.projectGategoryService.addProjectCategory(this.projectGategory)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
