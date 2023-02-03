// Задание 1
function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}


// Задание 2
class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;

        if ( a + b < c || a + c < b || b + c < a ) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }   
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        let s = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return Math.abs(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new  Triangle(a, b, c);  
    } catch (error) {
       return {
        get perimeter() {
            return "Ошибка! Треугольник не существует";
        },
        get area() {
            return "Ошибка! Треугольник не существует";
        }

       }
    }
        
}

