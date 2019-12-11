import { Component, OnInit } from '@angular/core';
import { GradProject} from '../entity';
import {UniversityService} from '../university.service';


@Component({
  selector: 'app-gradproject',
  templateUrl: './Gradproject.component.html',
 // styleUrls: ['./degree.component.css']
})
export class GradprojectComponent implements OnInit {
  gradProjects: GradProject[];
  private dataShow: GradProject[];      // 分页后在当前页要显示的数据
  public leng: number;                 // 数据总量，需要传给子组件的变量
  public currentPag: number;           // 保存从子组件中传来的当前显示页面
  public pagNums: number;              // 保存从子组件中传来的每页显示数量
  public oldCurrentPag: number;
  public oldPagNums: number;
  constructor(private gradProjectService: UniversityService) { }

  ngOnInit() {
    this.getGradProjects();
  }
  // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
  ngDoCheck(): void {
    if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
      this.dataShow = [];
      let startNum = (this.currentPag - 1) * this.pagNums;
      for ( let i = 0; i < this.pagNums; i++, startNum++) {
        if ( this.gradProjects[startNum] !== null && this.gradProjects[startNum] !== undefined) {
          this.dataShow.push(this.gradProjects[startNum]);
        }
      }
      this.oldCurrentPag = this.currentPag;
      this.oldPagNums = this.pagNums;
    }
  }
  // 捕获当前显示页码函数
  currentPagHandel(pag: number) {
    this.currentPag = pag;
    console.log( 'curpag:' + pag );
  }
  // 捕获每页显示数量行数
  pagNumsHandel(pagNum: number) {
    this.pagNums = pagNum;
  }

  getGradProjects(): void {
    this.gradProjectService.getGradProjects ()
      .subscribe(res => {this.gradProjects = res; this.leng = res.length; }); // 注意添加leng赋值
  }
  delete(gradProject: GradProject | number): void {
    this.gradProjects = this.gradProjects.filter(h => h !== gradProject);
    this.gradProjectService.deleteGradProject(gradProject).subscribe(res => {
      alert(res.message); // 弹出后台给的消息
      // 以下代码用于成果删除一行数据后页面内容刷新，并将页面保持在原页数位置不变。
      // if ( res.message === '删除成功') { //如果成功删除后后台返回的数据是‘删除成功’，可以去点这里的注释
      this.gradProjects = this.gradProjects.filter(h => h !== gradProject); // 过滤掉已经被删除数据
      this.dataShow = [];
      let startNum = (this.currentPag - 1) * this.pagNums;
      for ( let i = 0; i < this.pagNums; i++, startNum++) {
        if ( this.gradProjects[startNum] !== null && this.gradProjects[startNum] !== undefined) {
          this.dataShow.push(this.gradProjects[startNum]);
        }
      }
    });
  }
}
