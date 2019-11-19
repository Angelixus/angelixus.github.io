class Head {
  constructor(university, student) {

    if(!!Head.instance) {
      return Head.instance;
    }

    Head.instance = this;

    this.university = university;
    this.student = student;
    this.history = {};
    this.history[this.student.getFirstSubject().getSubjectName()] = false;
    this.history[this.student.getFirstSubject().getDegreeName()] = false;
    this.history[this.university.getBuilding()] = false;
    this.history[this.university.getUniversityName()] = false;
    this.history[
      this.student
        .getFirstSubject()
        .getCourse()
        .getCourseName()
    ] = false;
    this.history[this.student.getName()] = false;
    this.history[this.student.getEmail()] = false;

    return this;
  }

  getSubjectName() {
    name = this.student.getFirstSubject().getSubjectName();
    this.history[name] = true;
    return name;
  }

  getDegreeName() {
    name = this.student.getFirstSubject().getDegreeName();
    this.history[name] = true;
    return name;
  }

  getBuilding() {
    name = this.university.getBuilding();
    this.history[name] = true;
    return name;
  }

  getUniversityName() {
    name = this.university.getUniversityName();
    this.history[name] = true;
    return name;
  }

  getCourseName() {
    name = this.student
      .getFirstSubject()
      .getCourse()
      .getCourseName();
    this.history[name] = true;
    return name;
  }

  getStudentName() {
    name = this.student.getName();
    this.history[name] = true;
    return name;
  }

  getStudentEmail() {
    name = this.student.getEmail();
    this.history[name] = true;
    return name;
  }

  getRestOfData() {
    var res = [];
    for(var key in this.history) {
      if(!this.history[key]) {
        res.push(key);
      }
    }

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