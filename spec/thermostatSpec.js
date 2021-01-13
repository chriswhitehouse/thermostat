describe('Thermostat', function () {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('new', function (){
    it('should start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('upTemperature', function(){
    it("Increases the temperature by 1", function() {
      thermostat.upTemperature();
      expect(thermostat.temperature).toEqual(21);
    })
  });

  describe('downTemperature', function(){
    it("Decreases the temperature by 1", function() {
      thermostat.downTemperature();
      expect(thermostat.temperature).toEqual(19);
    })
  });

});
