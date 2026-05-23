class Rectangle{
    constructor(length, breadth, color){
        this.length = length;
        this.breadth = breadth;
        this.color = color;
    }

    area(){
        const area = this.length * this.breadth;
        return area;
    }

    paint(){
        console.log(`The rectangle is painted ${this.color}`);
    }
}

const rect = new Rectangle(5, 3, "red");
area = rect.area();
console.log(area);
rect.paint();