var beerSong = function(n) {
  var lyricArray = [];
  while (n > 0) {
    lyricArray.push(n + " bottles of beer on the wall, " + n + " bottles of beer. Take one down and pass it around, " + (n -1) + " bottles of beer on the wall.");
    n--;
    if (n === 0) {
      break;
    };
  };
  return lyricArray;
};
