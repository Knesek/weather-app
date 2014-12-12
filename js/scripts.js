// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
      html = '<h1>'+weather.city+', '+weather.region+'</h1>';
      html += '<h2>'+weather.temp+'&deg;'+'</h2>'; 
      html += '<p class="condition">'+weather.text+'</p>';

      html += '<br />'+'<br />';

      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day;
      }
      html += '<br />';


      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].high+'&deg;F</li></ul>'+'</p>';
      }
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].low+'&deg;F</li></ul>'+'</p>';
      }


      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });



$('.img').foggy({
   blurRadius: 2,         
 }); 
});