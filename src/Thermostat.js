class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  upTemperature() {
    this.temperature ++;
  }

  downTemperature() {
    if(this.temperature === 10) {
      throw Error("Cannot go below 10 degrees");
    }
    else {
      this.temperature --;
    };
  };
}
