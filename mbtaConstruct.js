var Line = function(name, stops) {
  this.name = name;
  this.stops = stops;
};

Line.prototype = {
  distanceToPark: function(stop) {
    return Math.abs(this.stops.indexOf(stop) - this.stops.indexOf('park st'));
  },
  distanceSameLine: function(starting, ending) {
    return Math.abs(this.stops.indexOf(starting) - this.stops.indexOf(ending));
  }
};

var green = new Line('green', ['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley']);
var red = new Line('red', ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);
var orange = new Line('orange', ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']);

var distance = function(startingLine, startingStation, endingLine, endingStation) {
  if (startingLine === endingLine) {
    return startingLine.distanceSameLine(startingStation, endingStation);
  } else {
    return startingLine.distanceToPark(startingStation) + endingLine.distanceToPark(endingStation);
  }
};

startingLine = red;
startingStation = 'harvard';
endingLine = red;
endingStation = 'south station';
console.log(distance(startingLine, startingStation, endingLine, endingStation));

startingLine = red;
startingStation = 'harvard';
endingLine = green;
endingStation = 'haymarket';
console.log(distance(startingLine, startingStation, endingLine, endingStation));
