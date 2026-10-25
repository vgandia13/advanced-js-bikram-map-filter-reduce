//RESUELVE LOS EJERCICIOS AQUI

// 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
  return numbers.map((n) => n ** n);
}

// 2
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const foodPhrases = {
  Pizza: "Como soy de Italia, amo comer Pizza",
  Ramen: "Como soy de Japón, amo comer Ramen",
  Paella: "Como soy de Valencia, amo comer Paella",
  Entrecot: "Aunque no como carne, el Entrecot es sabroso",
};

const result2 = foodList.map((food) => foodPhrases[food]);

// 3
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const result3 = staff.map(
  (person) => `${person.name} es ${person.role} y le gusta ${person.hobbies.join(" y ")}`
);

// 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((n) => n % 2 !== 0);

// 5
const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

const result5 = foodList2
  .filter((food) => food.isVeggie)
  .map((food) => {
    const adjective = food.name.includes("burguer") ? "rica" : "rico";
    return `Que ${adjective} ${food.name} me voy a comer!`;
  });

// 6
const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const result6 = inventory.filter((item) => item.price > 300).map((item) => item.name);

// 7
const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acc, n) => acc * n, 1);

// 8
const sentenceElements = [
  "Me",
  "llamo",
  "Victor",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const result8 = sentenceElements.reduce((acc, word) => `${acc} ${word}`);

// 9
const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];

const result9 = books
  .filter((book) => book.category === "code")
  .reduce((acc, book) => acc + book.price, 0);
