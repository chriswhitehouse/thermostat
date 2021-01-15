$(document).ready( function(){
  var thermostat = new Thermostat();

  updateTemperature();

  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city)
  })

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click( function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click( function(){
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').click( function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
  })

  $('#powersaving-off').click( function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=11d6e8a90d125082deb9c4084ecaa519';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }s
});
