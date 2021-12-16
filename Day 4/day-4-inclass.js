// Swap two variables using destructuring
/*
Given below two variable you have to swap their values using destructuring 
*/
let a = 10;
let b = 20;
console.log(a, b);
// After swapping a should have value 20 and b should have value 10.

[b, a] = [a, b];
console.log(a, b);

// Destructuring exercise 

let weather = {
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 300,
      "main": "Drizzle",
      "description": "light intensity drizzle",
      "icon": "09d"
    }
  ],
  "base": "stations",
  "temp": 280.32,
  "pressure": 1012,
  "humidity": 81,
  "temp_min": 279.15,
  "temp_max": 281.15,
  "visibility": 10000,
  "wind": {
    "speed": 4.1,
    "deg": 80
  },
  "clouds": {
    "all": 90
  },
  "dt": 1485789600,
  "sys": {
    "type": 1,
    "id": 5091,
    "message": 0.0103,
    "country": "GB",
    "sunrise": 1485762037,
    "sunset": 1485794875
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}
// Use destructuring to get values needed to print
// 'London is expected to have Drizzle and a temperature of 280.32 Kelvin'

let { name, weather : [{main}], temp } = weather;

console.log(`${name} is expected to have ${main} and a temperature of ${temp} Kelvin`);

// for in exercise

function groceryPrice(groceries) {
    let output = 0;
    for (let item in groceries) {
        output += groceries[item];
    }
    return output;
}

let groceries = {
    banana : 12,
    Milk : 10.5,
    Bread : 8,
    Egg: 2,
};

let price = groceryPrice(groceries);
console.log(`Total price for grocery items is ${price}`)

// Object Practice

function objectToArray(object) {
    return Object.entries(object);
}

console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
})); // should return [["D", 1], ["B", 2], ["C", 3]]

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})); // should return [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Fix Object Keys

function fixObject(obj) {
  let output = {};
  for (let keys in obj) {
      output[keys + 's'] = obj[keys];
  }
  return output;
}

let obj = {
  sibling: 3,
  fav_movie: ['The Matrix', 'Titanic', 'Iron man', 'Avatar'],
  phone_number: [7872300000, 9012312312],
  friend: ['Raj', 'Kunal', 'Akash']
}

let newObject = fixObject(obj);

console.log(newObject); 
/*
Output:

{
  siblings: 3,
  fav_movies: ['The Matrix', 'Titanic', 'Iron man', 'Avatar'],
  phone_numbers: [7872300000, 9012312312],
  friends: ['Raj', 'Kunal', 'Akash']
}
*/