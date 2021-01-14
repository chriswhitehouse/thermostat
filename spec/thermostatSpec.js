'use strict';

describe('Thermostat', function () {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('new', function (){
    it('should start at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('should be on Power Saving by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('upTemperature', function(){
    it("Increases the temperature by 1", function() {
      thermostat.upTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    })
  });

  describe('downTemperature', function(){
    it("Decreases the temperature by 1", function() {
      thermostat.downTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    })
  });

  describe('minimumTemperature', function(){
    it("throws error if this.temperature is trying to go below 10", function() {
      for (var i = 0; i < 10; i++) {
        thermostat.downTemperature();
      }
      expect( function() { thermostat.downTemperature() }).toThrow(new Error("Cannot go below 10 degrees"));
    });
  });

  describe('tests togglePowerSaving', function(){
    it("turns powerSavingMode off", function(){
      thermostat.togglePowerSaving()
      expect(thermostat.isPowerSaving).toBe(false)
    });

    it("turns powerSavingMode on", function(){
      thermostat.isPowerSaving = false
      thermostat.togglePowerSaving()
      expect(thermostat.isPowerSaving).toBe(true)
    })
  })
  describe('maximumTemperature', function(){
    describe('when power saving mode is on', function(){
      it('throws an error if temperature is adjusted above 25 degrees', function(){
        thermostat.temperature = 25;
        expect( function() { thermostat.upTemperature() }).toThrow(new Error("Cannot go above 25 degrees"));
      });
    });

    describe('when power saving mode is off', function(){
      it('throws an error if temperature is adjusted above 32 degrees', function(){
        thermostat.togglePowerSaving()
        thermostat.temperature = 32
        expect( function() { thermostat.upTemperature() }).toThrow(new Error("Cannot go above 32 degrees"));
      })
    })
  });

  describe('reset', function(){
    it('should reset the temperature to 20 degrees', function(){
      thermostat.temperature = 25;
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('usage', function(){
    it('returns low-usage if temp is below 18', function(){
      thermostat.temperature = 17
      expect(thermostat.usage()).toEqual('low-usage');
    });

    it('returns medium-usage if temp is below or equal to 25', function(){
      thermostat.temperature = 23
      expect(thermostat.usage()).toEqual('medium-usage');
    });

    it('returns high-usage if temp is above 25', function(){
      thermostat.temperature = 28
      expect(thermostat.usage()).toEqual('high-usage');
    });
  });

});
