class Circle{
    _radius;
    _color;
    constructor(radius, color) {
        this._radius = radius;
        this._color = color
    }

    get radius() {
        return this._radius
    }
    get area(){
        return this._radius * this._radius * Math.PI
    }

    set radius(radius){
        this._radius = radius
    }
}