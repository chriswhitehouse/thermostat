describe('Thermostat', function () {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('new', function (){
    it('should start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('should be on Power Saving by default', function() {
      expect(thermostat.isPowerSaving).toBe(true);
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

  describe('minimumTemperature', function(){
    it("throws error if this.temperature is trying to go below 10", function() {
      thermostat.temperature = 10
      expect( function() { thermostat.downTemperature() }).toThrow(new Error("Cannot go below 10 degrees"));
    });
  });

});
