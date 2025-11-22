
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    teacher: Teacher | undefined;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

export default Subjects;
