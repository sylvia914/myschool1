import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from  './login/login.component';
import { IndexComponent } from './index/index.component';

import { CollegeComponent } from './college/college.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AppRoutingModule } from './app-routing.module';
import { AddCollegeComponent } from './college/add-college.component';
import { UpdateCollegeComponent } from './college/update-college.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepComponent } from './department/add-dep.component';
import { UpdateDepComponent } from './department/update-dep.component';
import { AddTeacherComponent } from './teacher/add-teacher.component';
import { UpdateTeacherComponent } from './teacher/update-teacher.component';
import { PageComponent } from './page/page.component';
import {DegreeComponent} from './degree/degree.component';
import {AddDegreeComponent} from './degree/add-degree.component';
import {UpdateDegreeComponent} from './degree/update-degree.component';
import {ProftitleComponent} from './proftitle/proftitle.component';
import {AddProftitleComponent} from './proftitle/add-proftitle.component';
import {UpdateProftitleComponent} from './proftitle/update-proftitle.component';
import {ProjectCategoryComponent} from './projectCategory11/ProjectCategory.component';
import {AddProjectCategoryComponent} from './projectCategory11/add-projectCategory.component';
import {UpdateProjectCategoryComponent} from './projectCategory11/update-projectCategory.component';
import {ProjectStatusComponent} from './projectStatus11/projectStatus.component';
import {AddProjectStatusComponent} from './projectStatus11/add-projectStatus.component';
import {UpdateProjectStatusComponent} from './projectStatus11/update-projectStatus.component';
import {AddProjectTypeComponent} from './projectType11/add-projectType.component';
import {ProjectTypeComponent} from './projectType11/projectType.component';
import {UpdateProjectTypeComponent} from './projectType11/update-projectType.component';
import {AddGradprojectComponent} from './Gradproject11/add-Gradproject.component';
import {UpdateGradprojectComponent} from './Gradproject11/update-Gradproject.component';
import {GradprojectComponent} from './Gradproject11/Gradproject.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    CollegeComponent,
    TeacherComponent,
    AddCollegeComponent,
    UpdateCollegeComponent,
    DepartmentComponent,
    AddDepComponent,
    UpdateDepComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    PageComponent,
    DegreeComponent,
    AddDegreeComponent,
    UpdateDegreeComponent,
    ProftitleComponent,
    AddProftitleComponent,
    UpdateProftitleComponent,
    AddProjectCategoryComponent,
    ProjectCategoryComponent,
    UpdateProjectCategoryComponent,
    ProjectStatusComponent,
    AddProjectStatusComponent,
    UpdateProjectStatusComponent,
    AddProjectTypeComponent,
    ProjectTypeComponent,
    UpdateProjectTypeComponent,
    AddGradprojectComponent,
    UpdateGradprojectComponent,
    GradprojectComponent
  ],
  imports: [ // 当前项目依赖的所有模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // 如果要引入双向绑定，则需要引入FormModule
    FormsModule,
    ReactiveFormsModule
  ],
  // 定义服务
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy, }],
  // 默认启动哪个组件
  bootstrap: [AppComponent]
})
export class AppModule { }
