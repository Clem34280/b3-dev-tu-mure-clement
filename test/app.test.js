const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

const Triangle = require('../src/app').Triangle;

describe('Testing The Triangle Functions', function() {
    it('1. The Type of the Triangle', function(done) {
        let t1 = new Triangle(2, 4, 2);
        expect(t1.getType()).to.equal('Isocèle');
        done();
    });

    it('2. The perimeter of the Triangle', function(done) {
        let t2 = new Triangle(3, 7, 5);
        expect(t2.getPerimeter()).to.equal(15);
        done();
    });

    it('3. The surface of the Triangle', function(done) {
        let t3 = new Triangle(12, 8, 15);
        expect(t3.getSurface()).to.equal(47.81);
        done();
    });
});

const Circle = require('../src/app').Circle;

describe('Testing The Circle Functions', function() {
    it('1. The diameter of the Circle', function(done) {
        let c1 = new Circle(8);
        expect(c1.getDiameter()).to.equal(16);
        done();
    });

    it('2. The perimeter of the Circle', function(done) {
        let c2 = new Circle(22);
        expect(c2.getPerimeterC()).to.equal(138.16);
        done();
    });

    it('3. The surface of the Circle', function(done) {
        let c3 = new Circle(13);
        expect(c3.getSurfaceC()).to.equal(530.66);
        done();
    });
});