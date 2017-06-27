function Tablet () {
}

Tablet.prototype.touch = function(x, y) {
this.x = x;
this.y = y;
return  this;
};
module.exports = Tablet;