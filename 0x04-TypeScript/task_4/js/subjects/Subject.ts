namespace Subjects {
  // Interface for Teacher
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Interface for Subject (for ALX check)
  export interface Subject {
    teacher?: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  // Class implementing Subject with the setter
  export class SubjectClass implements Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

