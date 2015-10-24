describe('songOutput', function() {
  it("verifies that the song output is expected based on input of 5", function() {
    var lyrics = beerSong(5);

    expect(lyrics[0]).to.equal("5 bottles of beer on the wall, 5 bottles of beer. Take one down and pass it around, 4 bottles of beer on the wall.");
    expect(lyrics[5]).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 5 bottles of beer on the wall.");
  });

  it("verifies that the song output is expected based on input of 99", function() {
    var lyrics = beerSong(99);

    expect(lyrics[0]).to.equal("99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.");
    expect(lyrics[99]).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});

describe('checkLimit', function() {
  it("make sure everybody stays cool", function() {
    expect(beerSong(100)).to.equal("I think you've had enough.");
  });
});
