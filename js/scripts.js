// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
      html = '<h1>'+weather.city+', '+weather.region+'</h1>';
      html += '<h2>'+weather.temp+'&deg;'+'</h2>';
      
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day;
      }

      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].high+'&deg;F</li></ul>'+'</p>';
      }
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].low+'&deg;F</li></ul>'+'</p>';
      }

      if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});


  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

$('.img').foggy({
   blurRadius: 1.5,         
 }); 
});
