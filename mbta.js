// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var distance = function(startingLine, startingStation, endingLine, endingStation){
  if (startingLine === endingLine){
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation));
  } else {
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('park st')) + Math.abs(lines[endingLine].indexOf('park st') - lines[endingLine].indexOf(endingStation));
  }
};

startingLine = 'red';
startingStation = 'alewife';
endingLine = 'red';
endingStation =  'park st';
console.log(distance(startingLine, startingStation, endingLine, endingStation));

startingLine = 'red';
startingStation = 'alewife';
endingLine = 'green';
endingStation =  'government center';
console.log(distance(startingLine, startingStation, endingLine, endingStation));
