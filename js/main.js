
$.ajax({
    url:"https://freegeoip.net/json/",
    cache: false,
    success: function (geo) {
                  var http = "https://fcc-weather-api.glitch.me/api/current?lat=" + geo.latitude + "&lon=" + geo.longitude;

                  $.ajax({
                    url: http,
                    cache: false,
                    success: function (data) {

                      var temp = data.main.temp;
                      var wind = data.wind.speed;
                      var condition = data.weather[0].main.toLowerCase();

                      switch (condition) {
                        case 'rain':
                        $("#backgroundImg").css('background-image', 'url("https://i.ytimg.com/vi/z_ex8dliQUA/maxresdefault.jpg")');
                        break;
                        case 'clear sky':
                        $("#backgroundImg").css('background-image', 'url("http://www.midarkskypark.org/wp-content/uploads/2015/05/slide1-1920x1080.jpg")');
                        break;
                        case 'few clouds':
                        $("#backgroundImg").css('background-image', 'url("http://lakepath.com/wp-content/uploads/2015/01/Lake-Michigan-Shining-Through-Clouds.jpg")');
                        break;
                        case 'scattered clouds':
                        $("#backgroundImg").css('background-image', 'url("http://lakepath.com/wp-content/uploads/2015/01/Lake-Michigan-Shining-Through-Clouds.jpg")');
                        break;
                        case 'clouds':
                        $("#backgroundImg").css('background-image', 'url("http://cpplunkett.photos/wp-content/uploads/2014/08/sailboat-under-clouds-lake-michigan-chicago-081414.jpg")');
                        break;
                        case 'shower rain':
                        $("#backgroundImg").css('background-image', 'url("https://i.ytimg.com/vi/z_ex8dliQUA/maxresdefault.jpg")');
                        break;
                        case 'thunderstorm':
                        $("#backgroundImg").css('background-image', 'url("http://media.mlive.com/news/detroit_impact/photo/lightning-storm-over-grand-rapids-mi-7a7f5cd71e69de85jpg-3d7c44df07719d29.jpg")');
                        break;
                        case 'snow':
                        $("#backgroundImg").css('background-image', 'url("http://www.jpss.noaa.gov/assets/images/galleries/weather_gallery/gallery-weather_9.jpg")');
                        break;
                        case 'mist':
                        $("#backgroundImg").css('background-image', 'url("http://bossfight.co/wp-content/uploads/2016/04/boss-fight-free-high-quality-stock-images-photos-photography-trees-forest-mist.jpg")');
                        break;
                      }



                      $('#location').html(geo.city);
                      $('#temp').html(Math.floor(temp) + "&deg;C");
                      $('#condition').html(condition); //add icons?
                      $('#wind').html(Math.floor(wind) + ' kph wind'); //add direction wind.deg

                      var i = 0;
                      $('.btn').on('click', function metric () {

                          if(i===0) {
                        temp = (temp * 9/5) + 32;
                        wind = wind * .621;
                        $('#temp').html(Math.floor(temp) + "&deg;F");
                        $('#wind').html(Math.floor(wind) + ' mph wind');
                        i = 1;
                      } else if (i===1) {
                        temp = (temp - 32) * (5/9);
                        wind = wind * (1.601);
                        $('#temp').html(Math.floor(temp) + "&deg;C");
                        $('#wind').html(Math.floor(wind) + ' kph wind');
                        i = 0;
                      }


                    } );
                    }//end of ajax weather
                  })
    }
});//end of ajax geo
