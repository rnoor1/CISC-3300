$(document).ready(function() {
    $.ajax({
        url: 'https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true&temperature_unit=fahrenheit',
        method: 'GET',
        success: function(data) {
            const temperature = data.current_weather.temperature;
            $('#temperature').text(`The current temperature in NYC is ${temperature}°F 2 meters above ground`);
        },
        error: function() {
            $('#temperature').text('Error loading temperature data.');
        }
    });
});
