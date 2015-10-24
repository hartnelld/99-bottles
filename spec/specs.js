describe('songOutput', function() {
  it("verifies that the song output is expected based on input", function() {
    var lyrics = beerSong(5);
    expect(lyrics[0]).to.equal("5 bottles of beer on the wall, 5 bottles of beer. Take one down and pass it around, 4 bottles of beer on the wall.");
    expect(lyrics[5]).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 5 bottles of beer on the wall.");
  });
});
