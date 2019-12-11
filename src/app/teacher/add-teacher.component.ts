import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService} from '../university.service';
import { Teacher, Degree, Title, College,  Department } from '../entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
})
export class AddTeacherComponent implements OnInit {
  @Input() schools: College[];
  degrees: Degree[];
  titles: Title[];
  departments: Department[];
  teacher: Teacher;
  school: College;
  degree: Degree;
  title: Title;
  department: Department;
  constructor(
    private route: ActivatedRoute,
    private teacherService: UniversityService,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getColleges() ;
    this.getDegrees();
    this.getTitles();
    this.getDepartments();
  }
  getColleges(): void {
    this.teacherService.getColleges ()
      .subscribe(res => this.schools = res);
  }
  getDegrees(): void {
    this.teacherService.getDegrees ()
      .subscribe(res => this.degrees = res);
  }
  getTitles(): void {
    this.teacherService.getTitles ()
      .subscribe(res => this.titles = res);
  }
  getDepartments(): void {
    this.teacherService.getDepartments ()
      .subscribe(res => this.departments = res);
  }
  getDepSch(id: number): void {
    this.teacherService.getDepSch (id)
      .subscribe(res => this.departments = res);
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

  save(name: string, no: string): void { // 多个文本框数据
    this.teacher = {id: null, name: name.trim(), no: no.trim(),
      title: this.title, degree: this.degree, department: this.department};
    if (!name) { return; }
    this.teacherService.addTeacher(this.teacher)
      .subscribe((res) => {this.goBack(); alert(res.message); });
  }

  goBack(): void {
    this.location.back();
  }
}
