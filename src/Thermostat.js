'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.isPowerSaving = true;
    this.maxTemp = 25;
  };

  getCurrentTemperature(){
    return this.temperature;
  }

  isPowerSavingModeOn() {
    return this.isPowerSaving ===  true;
  }

  upTemperature() {
    if (this.temperature === this.maxTemp)
      throw Error(`Cannot go above ${this.maxTemp} degrees`);
    else
      this.temperature ++;
  };

  downTemperature() {
    if (this.isMinimumTemperature())
      throw Error("Cannot go below 10 degrees");
    else
      this.temperature --;
  };

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

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

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  usage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    else if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    else {
      return 'high-usage';
    };
  };
};
