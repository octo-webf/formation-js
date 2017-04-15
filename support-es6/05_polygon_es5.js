function Polygon(height, width) {
  this.height = height;
  this.width = width;
}

Polygon.prototype.area = function area() {
  return this.calcArea();
};

Polygon.prototype.calcArea = function calcArea() {
  return this.height * this.width;
};

const square = new Polygon(10, 10);

console.log(square.area());

