// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  return people.find(person => person.name === name); // Повертаємо знайдену особу або null, якщо не знайдено
}

/*Bob
const people = [
  { name: "Alice", age: 30 },
  { name: "oranjevoy zikr", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log(findByName(people, "Bob")); // { name: "Bob", age: 25 }
*/

module.exports = findByName;