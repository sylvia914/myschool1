import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService} from '../university.service';
import {Teacher, ProjectCategory, ProjectStatus, ProjectType, GradProject} from '../entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-gradproject',
  templateUrl: './add-Gradproject.component.html',
})
export class AddGradprojectComponent implements OnInit {
  @Input() projectCategorys: ProjectCategory[];
  projectStatuss: ProjectStatus[];
  projectTypes: ProjectType[];
  teachers: Teacher[];
  teacher: Teacher;
  gradProject: GradProject;
  projectCategory: ProjectCategory;
  projectStatus: ProjectStatus;
  projectType: ProjectType;
  constructor(
    private route: ActivatedRoute,
    private gradProjectService: UniversityService,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getTeachers() ;
    this.getProjectCategorys();
    this.getProjectTypes();
    this.getProjectStatuss();
  }
  getTeachers(): void {
    this.gradProjectService.getTeachers ()
      .subscribe(res => this.teachers = res);
  }
  getProjectCategorys(): void {
    this.gradProjectService.getProjectCategorys ()
      .subscribe(res => this.projectCategorys = res);
  }
  getProjectTypes(): void {
    this.gradProjectService.getProjectTypes()
      .subscribe(res => this.projectTypes = res);
  }
  getProjectStatuss(): void {
    this.gradProjectService.getProjectStatuss ()
      .subscribe(res => this.projectStatuss = res);
  }
  uploadFile(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('value', file, file.name);
      const options = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
      const url = 'http://localhost:8080/bysj/userimg';
      this.http.post(url, formData, options).toPromise().then(res => {
        console.log(res);
      });

    }
  }

  save(title: string, no: string): void { // 多个文本框数据
     this.gradProject = {id: null, title: title.trim(), no: no.trim(),
       teacher: this.teacher, graduateProjectCategory: this.projectCategory,
       graduateProjectType: this.projectType,
       graduateProjectStatus: this.projectStatus};
     if (!title) { return; }
     this.gradProjectService.addGradProject(this.gradProject)
      .subscribe((res) => {this.goBack(); alert(res.message); });
  }

  goBack(): void {
    this.location.back();
  }
}

