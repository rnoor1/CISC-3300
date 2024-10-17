$(document).ready(function() {
    
    $.ajax({
        url: 'https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m&temperature_unit=fahrenheit',
        method: 'GET',
        success: function(data) {
            
            const temperatures = data.hourly.temperature_2m;
            const latestTemperature = temperatures[temperatures.length - 1]; 

            $('#temperature').text(`The latest temperature in NYC is ${latestTemperature}°F 2 meter above the ground`);
        },
        error: function() {
            $('#temperature').text('Error loading temperature data.');
        }
    });
});
