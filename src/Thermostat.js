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
    if (this.isPowerSaving === true)
      if (this.temperature < this.maxTemp)
        this.temperature ++;
      else
        throw Error("Cannot go above 25 degrees")
  };

  downTemperature() {
    if(this.temperature === Thermostat.MINTEMP) {
      throw Error("Cannot go below 10 degrees");
    }
    else {
      this.temperature --;
    };
  };


}
