'use strict';

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
      thermostat.temperature = 10;
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
      expect(thermostat.temperature).toEqual(20);
    });
  });


});
