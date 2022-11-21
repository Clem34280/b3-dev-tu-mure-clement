class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(coteA, coteB, coteC) {
        this.coteA = coteA;
        this.coteB = coteB;
        this.coteC = coteC;
    }

    getType(){
        if (this.coteA == this.coteB == this.coteC){
            return 'Equilatéral';
        }
        else if (this.coteA == this.coteB || this.coteB == this.coteC || this.coteA == this.coteC){
            return 'Isocèle';
        }
        else if ((this.coteA == this.coteB && this.coteC^2 == this.coteA^2 + this.coteB^2) || (this.coteB == this.coteC && this.coteA^2 == this.coteB^2 + this.coteC^2) || (this.coteA == this.coteC && this.coteB^2 == this.coteA^2 + this.coteC^2)){
            return 'Isocèle-rectangle';
        }
        else if (this.coteA^2 == this.coteB^2 + this.coteC^2 || this.coteB^2 == this.coteA^2 + this.coteC^2 || this.coteC^2 == this.coteA^2 + this.coteB^2){
            return 'Rectangle';
        }
        else {
            return 'Quelconque'
        }
    }

    getPerimeter(){
        let P = (this.coteA + this.coteB + this.coteC);
        return P;
    }

    getSurface(){
        let P = ((this.coteA + this.coteB + this.coteC)/2);
        let S = Math.sqrt(P*(P-this.coteA)*(P-this.coteB)*(P-this.coteC));
        let res = Math.round(S*100)/100;
        return res;
    }
}

class Circle {
    constructor (){
        test
    }

    getTest(){
        let test;
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle,
    Circle:Circle
}