
$(document).ready(function () {

    //Cities array
    //var citiesLog = localStorage.getItem($("#city-input", $("")).val().trim());
    //console.log(city)

    // var citiesLog = []
    // $("#city-buttons").();

    // for (let i = 0; i < 10; i++) {
    //     const cityLog = array[i];
    //     //console.log(cityLog);
    // }

    // search button element to trigger weather specs
    $("#search").on("click", function (event) {
        // console.log($("#city-input").val());
        event.preventDefault();
        //setCity();

        //set variables for ajax calls
        var city = $("#city-input").val();

        //variables for Icons based on weather response
        // var cloudy = $("<i class="fas fa-cloud"></i>");
        // var sunny = $("<i class="fas fa-sun"></i>");
        // var rainy = $("<i class="fas fa-cloud-rain"></i>");
        // var snowy = $("<i class="fas fa-snowflake"></i>");
        // var windy = $("<i class="fas fa-wind"></i>");
        // var night = $("<i class="fas fa-moon"></i>");



        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5e3399442721ca6af10df2ddf94e0a89";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                //Set clear
                $("#current").empty();

                $("#current").append(`
                <h1>${city}<i class=""></i></h1>
                <div class="city"> Humidity: ${response.main.humidity} </div>
                <div class="wind">Wind Speed: ${response.wind.speed}</div>
                <div class="uv">UV Index: </div>
                    `);

                //5 Day Forecast Call

                var forecastQueryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&units=imperial&appid=5e3399442721ca6af10df2ddf94e0a89`;

                $.ajax({
                    url: forecastQueryURL,
                    method: "GET"
                })
                    .then(function (response) {
                        console.log(response)

                        //5 day loop
                        const array = response.daily
                        $(".card-group").empty();


                        for (let i = 0; i < 5; i++) {
                            const day = array[i];
                            //console.log(day);

                            $(".card-group").append(`
                            <div class="col m-1 p-2 bg-primary text-white text-left border rounded">
                            <h5 class="card-title">FIGURE OUT DATE!</h5>
                            <p class="card-text">Temp: ${day.temp.day}</p>
                            <p class="card-text">Humidity: ${day.humidity}</p>
                            </div>`);
                        };
                    });
            });
    });
});