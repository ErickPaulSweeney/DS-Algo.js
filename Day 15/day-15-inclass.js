// Users obj

let user1 = {
    name: 'Raj',
    age: 25,
    score: 90,
    location: 'Delhi'
}

let user2 = {
    name: 'John',
    age: 23,
    score: 89,
    location: 'Mumbai'
}

let user3 = {
    name: 'Jay',
    age: 29,
    score: 60,
    location: 'Dubai'
}

let user4 = {
    name: 'Rahul',
    age: 32,
    score: 100,
    location: 'London'
}

class User {
    constructor(name, age, score, location) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.location = location;
    }
}

let user5 = new User('John', 23, 90, 'Delhi');

// Colorful rectangle

class Rectangle {
    constructor(color, width, height) {
        this.color = color;
        this.width = width; 
        this.height = height; 
    }

    getArea() {
        return this.height * this.width; 
    }

    getPerimeter() {
        return 2 * (this.height + this.width);
    }

    getInfo() {
        console.log(`The perimeter is ${this.getPerimeter()} and area is ${this.getArea()}.`);
    }

}

let rectangle1 = new Rectangle('Red', 20, 10); 
rectangle1.getInfo(); // The perimeter is 60 and area is 200. 

// Classes

class Student {
    constructor(name, ...scores) {
        this.name = name;
        this.scores = scores;
    }

    newScore(...num) {
        this.scores.push(...num);
    }

    averageScore() {
        return this.average = (this.scores.reduce((accu, curr) => {
            accu += curr;
            return accu; 
        }, 0)) / this.scores.length; 
    }

    printInfo() {
        console.log(`${this.name} has average score of ${this.averageScore()}`)
    }
}

let student1 = new Student('John'); 
student1.newScore(90);
student1.newScore(100);  
student1.averageScore(); 
student1.printInfo(); // John has average score of 95
console.log(student1); // Student { name: 'John', scores: [ 90, 100 ], average: 95 }

// Various shapes

class Rectangle {

  constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
      this.topLeftX = topLeftX;
      this.topLeftY = topLeftY;
      this.width = width;
      this.height = height; 
      this.fillColor = fillColor; 
      this.borderColor = borderColor; 
  }
  
  getPerimeter() {
    console.log('Calculating the perimeter...');
    // code to calculate the perimeter of rectangle
    return 2 * (this.width + this.height);
  }

  getArea() {
    console.log('Calculating the area...');
    // code to calculate the area of rectangle
    return this.width * this.height; 
  }
  
  getDescription() {
    console.log('Printing the description...');
    // if the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
    return `It's a ${this.fillColor}-filled ${this.borderColor} bordered rectangle`
  }
}

// For circle
// ---------
// properties: centerX, centerY, radius, fillColor, borderColor
// methods: getArea, getPerimeter, getDescription

class Circle {
    
    constructor(centerX, centerY, radius, fillColor, borderColor) {
        this.centerX = centerX; 
        this.centerY = centerY; 
        this.radius = radius; 
        this.fillColor = fillColor; 
        this.borderColor = borderColor; 
    }

    getArea() {
        console.log('Calculating the area...'); 
        return Number.parseFloat(2 * Math.PI * this.radius).toFixed(2); 
    }

    getPerimeter() {
        console.log('Calculating the perimeter...'); 
        return Number.parseFloat(2 * (Math.PI * this.radius)).toFixed(2);
    }

  getDescription() {
    console.log('Printing the description...');
    return `It's a ${this.fillColor}-filled ${this.borderColor} bordered circle`
  }
}