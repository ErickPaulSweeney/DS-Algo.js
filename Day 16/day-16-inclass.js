// 

class Shape {
    constructor(fillColor, borderColor) {
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

    getArea() {
        console.log('Calculating the area...');
    }

    getPerimeter() {
        console.log('Calculating the perimeter...');
    }

    getDescription() {
        console.log('Printing the description...');
    }

}

class Rectangle extends Shape {

    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        super(fillColor, borderColor);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        super.getPerimeter();
        // code to calculate the perimeter of rectangle
        return 2 * (this.width + this.height);
    }

    getArea() {
        super.getArea();
        // code to calculate the area of rectangle
        return this.width * this.height;
    }

    getDescription() {
        super.getDescription();
        // if the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
        return `It's a ${this.fillColor}-filled ${this.borderColor} bordered rectangle`
    }
}

// For circle
// ---------
// properties: centerX, centerY, radius, fillColor, borderColor
// methods: getArea, getPerimeter, getDescription

class Circle extends Shape {

    constructor(centerX, centerY, radius, fillColor, borderColor) {
        super(fillColor, borderColor);
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    getArea() {
        super.getArea();
        return Number.parseFloat(2 * Math.PI * this.radius).toFixed(2);
    }

    getPerimeter() {
        super.getPerimeter(); 
        return Number.parseFloat(2 * (Math.PI * this.radius)).toFixed(2);
    }

    getDescription() {
        super.getPerimeter(); 
        return `It's a ${this.fillColor}-filled ${this.borderColor} bordered circle`
    }
}

// Student class

class Student {
    constructor(name, age, grade) {
        if (this.checkInput(name, age, grade)) {
            return;
        } 
        this.name = name; 
        if (age < 0) {
            console.log(`Invalid age provided, setting default age to 10`); 
            this.age = 10; 
        }
        else this.age = age; 
        this.grade = grade; 
    }

    checkInput(name, age, grade) {
        if (!name) {
            console.log(`Please provide name`); 
            return true;
        } 
        if (!age) {
            console.log(`Please provide age`);
            return true;
        }
        if (!grade) {
            console.log(`Please provide grade`); 
            return true;
        };
    }
}

let student1 = new Student('John', 20, 90);
console.log(student1); 

// Rectangle and circle part 2

class Shape {
    constructor(fillColor, borderColor) {
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

    getArea() {
        console.log('Calculating the area...');
    }

    getPerimeter() {
        console.log('Calculating the perimeter...');
    }

    getDescription() {
        console.log('Printing the description...');
    }

}

class Rectangle extends Shape {

    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        super(fillColor, borderColor);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        super.getPerimeter();
        // code to calculate the perimeter of rectangle
        return 2 * (this.width + this.height);
    }

    getArea() {
        super.getArea();
        // code to calculate the area of rectangle
        return this.width * this.height;
    }

    getDescription() {
        super.getDescription();
        // if the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
        return `${this.fillColor} rectangle`
    }

    pointIsInside(pointX, pointY) {
        return (pointX >= this.topLeftX && pointX <= this.topLeftX + this.width) && (pointY >= this.topLeftY && pointY <= this.topLeftY + this.height)
    }
}

// For circle
// ---------
// properties: centerX, centerY, radius, fillColor, borderColor
// methods: getArea, getPerimeter, getDescription

class Circle extends Shape {

    constructor(centerX, centerY, radius, fillColor, borderColor) {
        super(fillColor, borderColor);
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    getArea() {
        super.getArea();
        return Number.parseFloat(2 * Math.PI * this.radius).toFixed(2);
    }

    getPerimeter() {
        super.getPerimeter();
        return Number.parseFloat(2 * (Math.PI * this.radius)).toFixed(2);
    }

    getDescription() {
        super.getDescription();
        return `${this.fillColor} circle`
    }

    pointIsInside(pointX, pointY) {
        return (Math.sqrt(((pointX - this.centerX) ** 2) + ((pointY - this.centerY) **2))) <= this.radius; 
    }
}

class Diagram {
    constructor() {
        this.list = { rectangle: [], circle: [] };
    }

    addShape(shape) {
        let description = shape.getDescription();
        if (description.includes('rectangle')) {
            this.list.rectangle.push(shape);
        }
        if (description.includes('circle')) {
            this.list.circle.push(shape);
        }
    }

    getDescriptionAtPoint(pointX, pointY) {
        for (let keys in this.list) {
            for (let shape of this.list[keys]) {
                if (shape.pointIsInside(pointX, pointY)) return `Mouse pointer is over a ${shape.getDescription()}`; 
            }
        }
        return `Mouse pointer is not over a shape`
    }
}

let sheet = new Diagram();
let rectangle1 = new Rectangle(5, 5, 3, 4, 'red', 'black');
let circle1 = new Circle(4, 2, 3, 'yellow', 'green');
sheet.addShape(rectangle1);
sheet.addShape(circle1);
console.log(sheet.getDescriptionAtPoint(1, 1)); 