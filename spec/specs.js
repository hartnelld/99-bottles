describe('sing', function() {
  it("sing the 99 beers song with your number as starting point", function() {
    var expected = beerSong(5);
    expect(expected[0]).to.equal("5 bottles of beer on the wall, 5 bottles of beer. Take one down and pass it around, 4 bottles of beer on the wall.");
  });
});
