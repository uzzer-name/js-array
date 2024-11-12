//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
  let adults = [];
  for (let i = 0; i < people.length; i++) {
      if (people[i].age >= 18) {
          adults.push(people[i]);
      }
  }
  return adults;
}

// Приклад використання
const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 18 },
  { name: 'David', age: 15 }
];

console.log(filterAdults(people)); // [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 18 }]

module.exports = filterAdults;