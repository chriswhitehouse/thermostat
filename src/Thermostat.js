class Thermostat {
  static get MINTEMP() {
     return 10;
  }

  constructor() {
    this.temperature = 20;
    this.isPowerSaving = true;
  }

  upTemperature() {
    this.temperature ++;
  }

  downTemperature() {
    if(this.temperature === Thermostat.MINTEMP) {
      throw Error("Cannot go below 10 degrees");
    }
    else {
      this.temperature --;
    };
  };


}
