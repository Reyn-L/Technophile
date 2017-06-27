function Tablet () {
}

Tablet.prototype.touch = function(x, y) {
  this.x = x;
  this.y = y;
  return  {x : x,
    y:y
  };
};

module.exports = Tablet;