'use strict';

class Thermostat {
  static get MINTEMP() {
     return 10;
  }

  constructor() {
    this.temperature = 20;
    this.isPowerSaving = true;
    this.maxTemp = 25
  }

  upTemperature() {
    if (this.temperature === this.maxTemp)
      throw Error(`Cannot go above ${this.maxTemp} degrees`)
    else
      this.temperature ++;
  };

  downTemperature() {
    if (this.temperature === Thermostat.MINTEMP)
      throw Error("Cannot go below 10 degrees");
    else
      this.temperature --;
  };

  togglePowerSaving() {
    if (this.isPowerSaving === true) {
      this.isPowerSaving = false;
      this.maxTemp = 32;
    }
    else {
      this.isPowerSaving = true;
      this.maxTemp = 25;
    };
  };
};
