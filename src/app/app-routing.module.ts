import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollegeComponent } from './college/add-college.component';
import { UpdateCollegeComponent } from './college/update-college.component';
import { CollegeComponent } from './college/college.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DepartmentComponent} from './department/department.component';
import { AddDepComponent } from './department/add-dep.component';
import { UpdateDepComponent } from './department/update-dep.component';
import { AddTeacherComponent } from './teacher/add-teacher.component';
import { UpdateTeacherComponent } from './teacher/update-teacher.component';
import { LoginComponent } from  './login/login.component';
import { IndexComponent } from './index/index.component';
import {DegreeComponent} from './degree/degree.component';
import {ProftitleComponent} from './proftitle/proftitle.component';
import {AddDegreeComponent} from './degree/add-degree.component';
import {AddProftitleComponent} from './proftitle/add-proftitle.component';
import {UpdateDegreeComponent} from './degree/update-degree.component';
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

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'}, // 默认路由(登录)
  {path: 'index', component: IndexComponent, children: [ // 嵌套路由
      { path: '', redirectTo: '/college', pathMatch: 'full' }, // 空路径 重定向
      { path: 'college', component: CollegeComponent},
      { path: 'department', component: DepartmentComponent},
      { path: 'teacher', component: TeacherComponent},
      { path: 'degree', component: DegreeComponent},
      { path: 'profTitle', component: ProftitleComponent},
      { path: 'addCollege', component: AddCollegeComponent},
      { path: 'addDegree', component: AddDegreeComponent},
      { path: 'addProftitle', component: AddProftitleComponent},
      { path: 'updateCollege/:id', component: UpdateCollegeComponent},
      { path: 'updateDegree/:id', component: UpdateDegreeComponent},
      { path: 'updateProftitle/:id', component: UpdateProftitleComponent},
      { path: 'addDep', component: AddDepComponent},
      { path: 'updateDep/:id', component: UpdateDepComponent},
      { path: 'addTeacher', component: AddTeacherComponent},
      { path: 'updateTeacher/:id', component: UpdateTeacherComponent},
      { path: 'PC', component: ProjectCategoryComponent},
      { path: 'addPC', component: AddProjectCategoryComponent},
      { path: 'updatePC/:id', component: UpdateProjectCategoryComponent},
      { path: 'PS', component:  ProjectStatusComponent},
      { path: 'addPS', component: AddProjectStatusComponent},
      { path: 'updatePS/:id', component:  UpdateProjectStatusComponent},
      { path: 'PT', component:  ProjectTypeComponent},
      { path: 'addPT', component: AddProjectTypeComponent},
      { path: 'updatePT/:id', component:  UpdateProjectTypeComponent},
      { path: 'GP', component:  GradprojectComponent},
      { path: 'addGP', component: AddGradprojectComponent},
      { path: 'updateGP/:id', component:  UpdateGradprojectComponent},
      ]},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
