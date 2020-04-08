
$(document).ready(function () {
    
    //Default Weather Display
    //var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=4180439&appid=5e3399442721ca6af10df2ddf94e0a89";



    // search button element to trigger weather specs
    $("#search").on("click", function (event) {
        // console.log($("#city-input").val());
        event.preventDefault()


        //set variables for ajax calls
        var city = $("#city-input").val();
        var humidity = $("response.list.main.humidity").val();
        //var humidity = $("list.main.humidity")val();
        //console.log(humidity)

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=5e3399442721ca6af10df2ddf94e0a89";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                $("#current").append(`
                <h1>${city}</h1>
                    <ul>${humidity}</ul>
                    <ul>Wind Speed: </ul>
                    <ul>UV Index: </ul>
                    `);

                //Set variables for event to go into Local Storage (hint: set var = localStorage.getItem)

                //Call "localStorage.getItem" and set (hint: localStorage.setItem)

            })

    });
});
//set default wFunction
//setDefault()