import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService} from '../university.service';
import { Teacher, Degree, Title, College,  Department } from '../entity';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
})
export class UpdateTeacherComponent implements OnInit {
  @Input() schools: College[];
  degrees: Degree[];
  titles: Title[];
  departments: Department[];
  teacher: Teacher;
  // department: Department;
  constructor(
    private route: ActivatedRoute,
    private teacherService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getColleges() ;
    this.getDegrees();
    this.getTitles();
    this.getDepartments();
    const id = this.route.snapshot.params.id; // 要修改专业的id
    this.teacherService.getTeacher(id)
      .subscribe(res => {
        this.teacher = res;
      });
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

  save(): void { // 多个文本框数据
    this.teacherService.updateTeacher(this.teacher)
      .subscribe((res) => {
        alert(res.message);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
  compareFn(o1: College, o2: College): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
