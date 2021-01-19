# thermostat
A small client side thermostat JavaScript application.

## Motivation
To build understanding of dynamic client side applications and the Document Object Model with JavaScript and jQuery.

## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
JavaScript with Jasmine test framework.

## Features
### Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Code Example
### Thermostat Model
``` js
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
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    })
  });

  describe('downTemperature', function(){
    it("Decreases the temperature by 1", function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    })
  });

  describe('minimumTemperature', function(){
    it("throws error if this.temperature is trying to go below 10", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect( thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('tests togglePowerSaving', function(){
    it("turns powerSavingMode off", function(){
      thermostat.switchPowerSavingModeOff()
      expect(thermostat.isPowerSavingModeOn()).toBe(false)
    });

    it("turns powerSavingMode on", function(){
      thermostat.switchPowerSavingModeOff()
      expect(thermostat.isPowerSavingModeOn()).toBe(false)
      thermostat.switchPowerSavingModeOn()
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
    })
  })
  describe('maximumTemperature', function(){
    describe('when power saving mode is on', function(){
      it('has maximum temperature of 25 degrees', function(){
        thermostat.switchPowerSavingModeOn();
        for (var i = 0; i < 7; i++) {
          thermostat.up();
        }
        expect( thermostat.getCurrentTemperature()).toEqual(25);
      });
    });

    describe('when power saving mode is off', function(){
      it('throws an error if temperature is adjusted above 32 degrees', function(){
        thermostat.switchPowerSavingModeOff()
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect( thermostat.getCurrentTemperature()).toEqual(32);
      })
    })
  });

  describe('reset', function(){
    it('should reset the temperature to 20 degrees', function(){
      thermostat.up();
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('usage', function(){
    it('returns low-usage if temp is below 18', function(){
      for (var i = 0; i < 4; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('returns medium-usage if temp is below or equal to 25', function(){
      for (var i = 0; i < 4; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('returns high-usage if temp is above 25', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 9; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

});
```

## Installation
1. fork repo.
2. clone repo.
3. `$ cd thermostat`
4. `npm install`

## Tests
`$ open SpecRunner.html`


## How to use?
1. `$ open views/thermostat.html`
