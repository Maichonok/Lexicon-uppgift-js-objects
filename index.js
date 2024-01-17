// Ex.#1
const person = {
  name: "Maja",
  age: 39,
  city: "Stockholm",
};

// Ex.#2
console.log(
  `Hello, my name is: ${person.name}, I'm ${person.age} y.o, I live in ${person.city}`
);

// Ex.#3
person.age = 30;
person.email = "maja@gmail.com";

// Ex.#4
const car = {
  make: "Toyota",
  model: "Camry",
  displayDetails: function () {
    return `This car is a ${this.model} by ${this.make}.`;
  },
};

console.log(car.displayDetails());

// Ex.#5
for (let property in person) {
  console.log(property + ": " + person[property]);
}

// Ex.#6
const student = {
  name: "Peter",
  subjects: {
    mathematics: "A",
    english: "B",
    science: "A",
    history: "C",
  },
};

// Ex.#7
student.subjects.history = "A";

// Ex.#8
const arrayOfBooks = [
  { title: "To Kill a Mockinbird", author: "Harper Lee" },
  { title: "Confessions of a Mask", author: "Yukio Mishima" },
  { title: "Of Mice and Men", author: "John Steinbeck" },
];

// Ex.#9
for (let book of arrayOfBooks) {
  console.log("Title: " + book.title + ", Author: " + book.author);
}
