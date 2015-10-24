var beerSong = function(n) {
  // Since we're manipulating n in loop I'll store the original input for reference
  var originalInput = n;
  var lyricArray = [];

  if (n > 99) {
    return "I think you've had enough.";
  };

  // Loop to build the song
  while (n > 0) {
    lyricArray.push(n + " bottles of beer on the wall, " + n + " bottles of beer. Take one down and pass it around, " + (n -1) + " bottles of beer on the wall.");
    n--;

    if (n === 0) {
      lyricArray.push("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + originalInput + " bottles of beer on the wall.")
    };
  };

  // Return output as an array
  return lyricArray;
};
