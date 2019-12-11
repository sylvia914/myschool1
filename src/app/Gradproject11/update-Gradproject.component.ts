import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService} from '../university.service';
import {Teacher,  ProjectCategory, ProjectStatus, ProjectType, GradProject} from '../entity';

@Component({
  selector: 'app-update-gradproject',
  templateUrl: './update-Gradproject.component.html',
})
export class UpdateGradprojectComponent implements OnInit {
  @Input()  projectCategorys: ProjectCategory[];
  projectStatuss: ProjectStatus[];
  projectTypes: ProjectType[];
  teachers: Teacher[];
  gradProject: GradProject;
  constructor(
    private route: ActivatedRoute,
    private gradProjectService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProjectCateorys() ;
    this.getProjectStatuss();
    this.getProjectTypes();
    this.getTeachers();
    const id = this.route.snapshot.params.id; // 要修改专业的id
    this.gradProjectService.getGradProject(id)
      .subscribe(res => {
        this.gradProject = res;
      });
  }
  getProjectCateorys(): void {
    this.gradProjectService.getProjectCategorys()
      .subscribe(res => this.projectCategorys = res);
  }
  getProjectStatuss(): void {
    this.gradProjectService.getProjectStatuss()
      .subscribe(res => this.projectStatuss = res);
  }
  getProjectTypes(): void {
    this.gradProjectService.getProjectTypes()
      .subscribe(res => this.projectTypes = res);
  }
  getTeachers(): void {
    this.gradProjectService.getTeachers ()
      .subscribe(res => this.teachers = res);
  }
  save(): void { // 多个文本框数据
    this.gradProjectService.updateGradProject(this.gradProject)
      .subscribe((res) => {
        alert(res.message);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
  compareFn(o1: GradProject, o2: GradProject): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}

