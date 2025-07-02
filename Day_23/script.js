const names = ["sandesh", "sameer", "sumit"]

names.map((val) => {
    console.log(val.toUpperCase())
})

console.log("");

const numbers = [12, 33, 431, 44, 231, 1, 32]
const evennums = numbers.filter(num => num % 2 == 0)

evennums.forEach((val) => {
    console.log(val);
})

const peoples = [
    { name: "Tom", age: 16 },
    { name: "Sam", age: 18 },
    { name: "John", age: 21 },
    { name: "Roy", age: 22 },
]

const adults = peoples.filter(person => person.age > 18)
adults.forEach((person) => {
    console.log(person.age);

})