import { Component, OnInit } from '@angular/core';
import { ProjectCategory} from '../entity';
import {UniversityService} from '../university.service';

@Component({
  selector: 'app-projectcategory',
  templateUrl: './projectCategory.component.html',
 // styleUrls: ['./degree.component.css']
})
export class ProjectCategoryComponent implements OnInit {
  projectGategorys: ProjectCategory[];
  constructor(private projectGategoryService: UniversityService) { }

  ngOnInit() {
    this.getProjectCategorys();
  }
  getProjectCategorys(): void {
    this.projectGategoryService.getProjectCategorys()
      .subscribe(res => this.projectGategorys = res);
  }
  delete(projectCategory: ProjectCategory | number): void {
    this.projectGategorys = this.projectGategorys.filter(h => h !== projectCategory);
    this.projectGategoryService.deleteProjectCategory(projectCategory).subscribe(res => alert(res.message));
  }
}
