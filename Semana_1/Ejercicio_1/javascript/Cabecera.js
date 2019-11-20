class Head {
  constructor(university, student) {
    if (!!Head.instance) {
      return Head.instance;
    }

    Head.instance = this;

    this.university = university;
    this.student = student;
    this.history = new Map();
    this.history.set(this.student.getFirstSubject().getSubjectName(), false);
    this.history.set(this.student.getFirstSubject().getDegreeName(), false);
    this.history.set(this.university.getBuilding(), false);
    this.history.set(this.university.getUniversityName(), false);
    this.history.set(
      this.student
        .getFirstSubject()
        .getCourse()
        .getCourseName(),
      false
    );
    this.history.set(this.student.getName(), false);
    this.history.set(this.student.getEmail(), false);

    return this;
  }

  getSubjectName() {
    var name = this.student.getFirstSubject().getSubjectName();
    this.history.set(name, true);
    return name;
  }

  getDegreeName() {
    var name = this.student.getFirstSubject().getDegreeName();
    this.history.set(name, true);
    return name;
  }

  getBuilding() {
    var name = this.university.getBuilding();
    this.history.set(name, true);
    return name;
  }

  getUniversityName() {
    var name = this.university.getUniversityName();
    this.history.set(name, true);
    return name;
  }

  getCourseName() {
    var name = this.student
      .getFirstSubject()
      .getCourse()
      .getCourseName();
    this.history.set(name, true);
    return name;
  }

  getStudentName() {
    var name = this.student.getName();
    this.history.set(name, true);
    return name;
  }

  getStudentEmail() {
    var name = this.student.getEmail();
    this.history.set(name, true);
    return name;
  }

  getRestOfData() {
    var res = [];
    this.history.forEach(function(value, key) {
      if (!value) {
        res.push(key);
      }
    });

    return res;
  }
}

class Course {
  constructor(courseName) {
    this.courseName = courseName;
  }

  getCourseName() {
    return this.courseName;
  }
}

class Student {
  constructor(studentName, studentEmail, subjects) {
    this.studentName = studentName;
    this.studentEmail = studentEmail;
    this.subjects = subjects;
  }

  getName() {
    return this.studentName;
  }

  getEmail() {
    return this.studentEmail;
  }

  getSubjects() {
    return this.subjects;
  }

  getFirstSubject() {
    return this.subjects[0];
  }
}

class University {
  constructor(universityName, buildingName) {
    this.universityName = universityName;
    this.buildingName = buildingName;
  }

  getBuilding() {
    return this.buildingName;
  }

  getUniversityName() {
    return this.universityName;
  }
}

class Subject {
  constructor(subjectName, degreeName, course) {
    this.subjectName = subjectName;
    this.degreeName = degreeName;
    this.course = course;
  }

  getSubjectName() {
    return this.subjectName;
  }

  getDegreeName() {
    return this.degreeName;
  }

  getCourse() {
    return this.course;
  }
}

class History {
  constructor(historyTracker) {
    this.historyTracker = historyTracker;
  }
}

function instantiateHead() {
  university = new University(
    "Universidad de Oviedo",
    "Escuela de Ingeniería Informática"
  );
  course = new Course("Tercero de Carrera");
  subject = new Subject(
    "Software y Estándares para la Web",
    "Ingeniería Informática del Software",
    course
  );

  let subjects = [];
  subjects.push(subject);
  student = new Student("Ángel Olmedo García", "UO263930@uniovi.es", subjects);

  var head = new Head(university, student);

  return head;
}