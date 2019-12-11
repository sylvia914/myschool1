import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {
  ProjectCategory,
  Department,
  Teacher,
  Title,
  ProjectType,
  ProjectStatus,
  GradProject,
  Response,
  Degree,
  College
} from './entity';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  response: Response;
  private collegeUrl = 'http://localhost:8080/bysj/school.ctl';  // 自己机器上的servlet
  private depUrl = 'http://localhost:8080/bysj/department.ctl';
  private teacherUrl = 'http://localhost:8080/bysj/teacher.ctl';
  private degreeUrl = 'http://localhost:8080/bysj/degree.ctl';
  private titleUrl = 'http://localhost:8080/bysj/profTitle.ctl';
  private userUrl = 'http://localhost:8080/xg18/login';
  private gradProjectUrl = 'http://localhost:8080/bysj/graduateProject.ctl';
  private projectStatusUrl = 'http://localhost:8080/bysj/graduateProjectStatus.ctl';
  private projectTypeUrl = 'http://localhost:8080/bysj/graduateProjectType.ctl';
  private projectCategoryUrl = 'http://localhost:8080/bysj/graduateProjectCategory.ctl';


  constructor(private http: HttpClient) { }

  // 验证登录用户账号密码是否正确
  checkUser(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.userUrl, user);
  }
  /** GET heroes from the server */
  getColleges(): Observable<College[]> {
    return this.http.get<College[]>(this.collegeUrl ).pipe(
        catchError(this.handleError<College[]>('getColleges', []))
      );
  }
  getProjectTypes(): Observable<ProjectType[]> {
    return this.http.get<ProjectType[]>(this.projectTypeUrl )
      .pipe(
        catchError(this.handleError<ProjectType[]>('getColleges', []))
      );
  }
  getProjectCategorys(): Observable<ProjectCategory[]> {
    return this.http.get<ProjectCategory[]>(this.projectCategoryUrl )
      .pipe(
        catchError(this.handleError<ProjectCategory[]>('getColleges', []))
      );
  }
  getProjectStatuss(): Observable<ProjectStatus[]> {
    return this.http.get<ProjectStatus[]>(this.projectStatusUrl ).pipe(
      catchError(this.handleError<ProjectStatus[]>('getProjectStatuss', []))
    );
  }
  getDepartments(): Observable<Department[]> {
  return this.http.get<Department[]>(this.depUrl ).pipe(
    catchError(this.handleError<Department[]>('getDepartments', [])));
  }
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherUrl ).pipe(
      catchError(this.handleError<Teacher[]>('getTeachers', [])));
  }
  getGradProjects(): Observable<GradProject[]> {
    return this.http.get<GradProject[]>(this.gradProjectUrl ).pipe(
      catchError(this.handleError<GradProject[]>('getGradProjects', [])));
  }
  getDegrees(): Observable<Title[]> {
    return this.http.get<Title[]>(this.degreeUrl ).pipe(
      catchError(this.handleError<Title[]>('getDegrees', [])));
  }
  getTitles(): Observable<Title[]> {
    return this.http.get<Title[]>(this.titleUrl ).pipe(
      catchError(this.handleError<Title[]>('getProftitles', [])));
  }

  deleteProjectStatus(projectStatus: ProjectStatus| number): Observable<Response> {
    const id = typeof projectStatus === 'number' ? projectStatus : projectStatus.id;
    return this.http.delete<Response>(this.projectStatusUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deletePS'))
    );
  }
  deleteProjectCategory(projectCategory: ProjectCategory| number): Observable<Response> {
    const id = typeof projectCategory === 'number' ? projectCategory : projectCategory.id;
    return this.http.delete<Response>(this.projectCategoryUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deleteProjectCategory'))
    );
  }
  deleteProjectType(projectType: ProjectType| number): Observable<Response> {
    const id = typeof projectType === 'number' ? projectType : projectType.id;
    return this.http.delete<Response>(this.projectTypeUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deletePT'))
    );
  }
  deleteDegree(degree: Degree| number): Observable<Response> {
    const id = typeof degree === 'number' ? degree : degree.id;
    return this.http.delete<Response>(this.degreeUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deleteDegree'))
    );
  }
  deleteTitle(title: Title | number): Observable<Response> {
    const id = typeof title === 'number' ? title : title.id;
    return this.http.delete<Response>(this.titleUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deleteProftitle'))
    );
  }
  deleteCollege(college: College | number): Observable<Response> {
    const id = typeof college === 'number' ? college : college.id;
    return this.http.delete<Response>(this.collegeUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deleteCollege'))
    );
  }
  deleteDepartment(department: Department | number): Observable<Response> {
    const id = typeof department === 'number' ? department : department.id;
    return this.http.delete<Response>(this.depUrl + '?id=' + id, httpOptions).pipe(
            catchError(this.handleError<Response>('deleteDepartment'))
    );
  }
  deleteTeacher(teacher: Teacher| number): Observable<Response> {
    const id = typeof teacher === 'number' ? teacher : teacher.id;
    return this.http.delete<Response>(this.teacherUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deleteTeacher'))
    );
  }
  deleteGradProject(gradProject: GradProject| number): Observable<Response> {
    const id = typeof gradProject === 'number' ? gradProject : gradProject.id;
    return this.http.delete<Response>(this.gradProjectUrl + '?id=' + id, httpOptions).pipe(
      catchError(this.handleError<Response>('deleteGradProject'))
    );
  }


  /** POST: add a new college to the server */

  addProjectType(projectType: { description: string; no: string;  remarks: string }): Observable<Response> {
    return this.http.post<Response>(this.projectTypeUrl, projectType, httpOptions).pipe(
      catchError(this.handleError<any>('addProjectType'))
    );
  }
  addCollege(college: { description: string; no: string;  remarks: string }): Observable<Response> {
    return this.http.post<Response>(this.collegeUrl, college, httpOptions).pipe(
      catchError(this.handleError<any>('addCollege'))
    );
  }
  addProjectCategory(projectCategory: { description: string; no: string;  remarks: string }): Observable<Response> {
    return this.http.post<ProjectCategory>(this.projectCategoryUrl, projectCategory, httpOptions).pipe(
      catchError(this.handleError<any>('addProjectCategory'))
    );
  }

  addProjectStatus(projectStatus: { description: string; no: string;  remarks: string }): Observable<Response> {
    return this.http.post<Response>(this.collegeUrl, projectStatus, httpOptions).pipe(
      catchError(this.handleError<any>('addProjectStatus'))
    );
  }
  addDegree(degree: { description: string; no: string;  remarks: string }): Observable<Response> {
    return this.http.post<Response>(this.degreeUrl, degree, httpOptions).pipe(
      catchError(this.handleError<any>('addDegree'))
    );
  }
  addTitle(title: { description: string; no: string;  remarks: string }): Observable<Response> {
    return this.http.post<Response>(this.titleUrl, title, httpOptions).pipe(
      catchError(this.handleError<any>('addProfTitle'))
    );
  }
  addDepartment(department: Department): Observable<Response> {
    return this.http.post<Response>(this.depUrl, department, httpOptions).pipe(
      catchError(this.handleError<any>('addDepartment'))
    );
  }
  addTeacher(teacher: Teacher): Observable<Response> {
    return this.http.post<Response>(this.teacherUrl, teacher, httpOptions).pipe(
      catchError(this.handleError<any>('addTeacher'))
    );
  }
  addGradProject(gradProject: GradProject): Observable<Response> {
    return this.http.post<Response>(this.gradProjectUrl, gradProject, httpOptions).pipe(
      catchError(this.handleError<any>('addGradProject'))
    );
  }
  /** GET college by id. Will 404 if id not found */
  getCollege(id: number): Observable<College> {
    const url = this.collegeUrl + '?id=' + id;
    return this.http.get<College>(url).pipe(
      catchError(this.handleError<College>(`getCollege id=${id}`))
    );
  }
  getProjectType(id: number): Observable<ProjectType> {
    const url = this.projectTypeUrl + '?id=' + id;
    return this.http.get<ProjectType>(url).pipe(
      catchError(this.handleError<ProjectType>(`getProjectType id=${id}`))
    );
  }
  getProjectStatus(id: number): Observable<ProjectStatus> {
    const url = this.projectStatusUrl + '?id=' + id;
    return this.http.get<ProjectStatus>(url).pipe(
      catchError(this.handleError<ProjectStatus>(`getProjectStatus id=${id}`))
    );
  }
  getProjectCategory(id: number): Observable<ProjectCategory> {
    const url = this.projectCategoryUrl + '?id=' + id;
    return this.http.get<ProjectCategory>(url).pipe(
      catchError(this.handleError<ProjectCategory>(`getProjectCategory id=${id}`))
    );
  }
  getDegree(id: number): Observable<Title> {
    const url = this.degreeUrl + '?id=' + id;
    return this.http.get<Title>(url).pipe(
      catchError(this.handleError<Title>(`getDegree id=${id}`))
    );
  }
  getTitle(id: number): Observable<Title> {
    const url = this.titleUrl + '?id=' + id;
    return this.http.get<Title>(url).pipe(
      catchError(this.handleError<Title>(`getProftitle id=${id}`))
    );
  }
  getDep(id: number): Observable<Department> {
    const url = this.depUrl + '?id=' + id;
    return this.http.get<Department>(url).pipe(
      catchError(this.handleError<Department>(`getDep id=${id}`))
    );
  }
  getTeacher(id: number): Observable<Teacher> {
    const url = this.teacherUrl + '?id=' + id;
    return this.http.get<Teacher>(url).pipe(
      catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }
  getGradProject(id: number): Observable<GradProject> {
    const url = this.gradProjectUrl + '?id=' + id;
    return this.http.get<GradProject>(url).pipe(
      catchError(this.handleError<GradProject>(`getGradProject id=${id}`))
    );
  }
  getDepSch(id: number): Observable<Department[]> {
    const url = this.depUrl + '?paraType=school&id=' + id;
    return this.http.get<Department[]>(url).pipe(
      catchError(this.handleError<Department[]>(`getDepSch school_id=${id}`))
    );
  }
  updateCollege(college: College): Observable<Response> {
    return this.http.put<Response>(this.collegeUrl, college, httpOptions).pipe(
      catchError(this.handleError<Response>('updateCollege'))
    );
  }
  updateProjectType(projectType: ProjectType): Observable<Response> {
    return this.http.put<Response>(this.projectTypeUrl, projectType, httpOptions).pipe(
      catchError(this.handleError<Response>('updateProjectType'))
    );
  }
  updateProjectCategory(projectCategory: ProjectCategory): Observable<Response> {
    return this.http.put<Response>(this.projectCategoryUrl, projectCategory, httpOptions).pipe(
      catchError(this.handleError<Response>('updateProjectCategory'))
    );
  }
  updateProjectStatus(projectStatus: ProjectStatus): Observable<Response> {
    return this.http.put<Response>(this.projectStatusUrl, projectStatus, httpOptions).pipe(
      catchError(this.handleError<Response>('updateProjectStatus'))
    );
  }
  updateTitle(title: Title): Observable<Response> {
    return this.http.put<Response>(this.titleUrl, title, httpOptions).pipe(
      catchError(this.handleError<Response>('updateProfTitle'))
    );
  }
  updateDegree(degree: Degree): Observable<Response> {
    return this.http.put<Response>(this.degreeUrl, degree, httpOptions).pipe(
      catchError(this.handleError<Response>('updateDegree'))
    );
  }
  updateDep(department: Department): Observable<Response> {
    return this.http.put<Response>(this.depUrl, department, httpOptions).pipe(
      catchError(this.handleError<Response>('updateDep'))
    );
  }
  updateTeacher(teacher: Teacher): Observable<Response> {
    return this.http.put<Response>(this.teacherUrl, teacher, httpOptions).pipe(
      catchError(this.handleError<Response>('updateTeacher'))
    );
  }
  updateGradProject(gradProject: GradProject): Observable<Response> {
    return this.http.put<Response>(this.gradProjectUrl, gradProject, httpOptions).pipe(
      catchError(this.handleError<Response>('updateGradProject'))
    );
  }
  /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

