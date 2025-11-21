namespace Subjects {
  // Interface for the Subject
  export interface Subject {
    teacher?: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  // Class implementing the interface
  export class SubjectClass implements Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
