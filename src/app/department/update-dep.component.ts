import {Component, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {UniversityService} from '../university.service';
import {College, Department} from '../entity';
@Component({
  selector: 'app-update-dep',
  templateUrl: './update-dep.component.html',
})
export class UpdateDepComponent implements OnInit {
  @Input() colleges: College[];
  department: Department;


  constructor(
    private route: ActivatedRoute,
    private departmentService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getColleges(); // 下拉菜单赋值
    const id = this.route.snapshot.params.id; // 要修改专业的id
    this.departmentService.getDep(id)
      .subscribe(res => {
        this.department = res;
      });
  }

  compareFn(o1: College, o2: College): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  getColleges(): void {
    this.departmentService.getColleges()
      .subscribe(res => this.colleges = res);
  }

  save(): void { // 多个文本框数据
    console.log(this.department);
    this.departmentService.updateDep(this.department)
      .subscribe((res) => {
        alert(res.message);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
