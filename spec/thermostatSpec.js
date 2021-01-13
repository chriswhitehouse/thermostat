describe('Thermostat', function () {
  var thermostat = new Thermostat();

  describe('new', function (){
    it('should start at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20)
    });
  });
});
