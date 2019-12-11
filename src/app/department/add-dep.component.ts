import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {UniversityService} from '../university.service';
import {College,  Department} from '../entity';
@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html'
})
export class AddDepComponent implements OnInit {
  @Input() colleges: College[];
  department: Department;
  school: College;
    constructor(
    private route: ActivatedRoute,
    private departmentService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
      this.getColleges() ;
    }
  getColleges(): void {
    this.departmentService.getColleges ()
      .subscribe(res => this.colleges = res);
  }

  save(description: string, no: string, remarks: string): void { //多个文本框数据
    this.department = {id: null, no: no.trim(), description: description.trim(), school: this.school, remarks: remarks.trim()};
    if (!description) { return; }
    this.departmentService.addDepartment(this.department)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
