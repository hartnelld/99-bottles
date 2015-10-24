describe('sing', function() {
  it("sing the 99 beers song with your number as starting point", function() {
    expect(beerSong(10)).to.equal("10 bottles of beer on the wall, 10 bottles of beer. Take one down and pass it around, 9 bottles of beer on the wall.");
  });
});
