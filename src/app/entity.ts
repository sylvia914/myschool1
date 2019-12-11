export class Response {
  message: string;
}
export class College {
  id: number;
  no: string;
  description: string;
  remarks: string;
}

export class Degree {
  id: number;
  no: string;
  description: string;
  remarks: string;
}
export class Title {
  id: number;
  no: string;
  description: string;
  remarks: string;
}
export class Department {
  id: number;
  no: string;
  description: string;
  remarks: string;
  school: College;
}

export class ProjectCategory {
  id: number;
  no: string;
  description: string;
  remarks: string;
}
export class ProjectType {
  id: number;
  no: string;
  description: string;
  remarks: string;
}
export class ProjectStatus {
  id: number;
  no: string;
  description: string;
  remarks: string;
}
export class Teacher {
  id: number;
  no: string;
  name: string;
  title: Title;
  degree: Degree;
  department: Department;
}

export class GradProject {
  id: number;
  no: string;
  title: string;
  teacher: Teacher;
  graduateProjectCategory: ProjectCategory;
  graduateProjectType: ProjectType;
  graduateProjectStatus: ProjectStatus;
}
