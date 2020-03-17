// Класс для вектора в двумерном пространстве с координатами x и y сохраняемыми в свойствах с тем же именем

class Vec {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(option) {
        return {
            x: this.x + option.x,
            y: this.y + option.y
        }
    }

    minus(option) {
        return {
            x: this.x - option.x,
            y: this.y - option.y
        }
    }
    
    get length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

}


console.log(new Vec(3, 4).length);