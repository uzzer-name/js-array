const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  const topScorers = [];
  for (let i = 0; i < students.length; i++) {
      if (students[i].score > 80) {
          topScorers.push(students[i].name);
      }
  }
  return topScorers;
}

//console.log(getTopScoringStudents(students)); // ["John", "Jane", "Jack"]

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  if (students.length === 0) return 0; // Перевірка на порожній масив

  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
      totalAge += students[i].age;
  }
  return totalAge / students.length; // Повертаємо середній вік
}

//console.log(getAverageAge(students));

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student); // Додаємо нового студента до масиву
  return students
}

/*
// Новий студент
const student = { name: "Jango", age: 35, score: 53 };
// Додаємо нового студента
console.log(addStudent(students, student));
*/

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  return students.filter(student => student.name !== name); // Повертаємо новий масив без студента з вказаним ім'ям
}

//console.log(removeStudentByName(students, "Jim"));

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };