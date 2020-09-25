$(document).ready(function () {
    //---Time (Current hour in 24h time)---
    const currentHour = parseInt(moment().format('HH'));

    //---Date---
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

    //---Retrieve local storage data & colour code rows---
    for (var i = 0; i < 9; i++) {
        // Test if local storage data exists
        if (localStorage.getItem("rowText" + i) !== null) {
            // Sets row text to local storage data
            $("#rowText" + i).text(localStorage.getItem("rowText" + i));
        }
        // Test if row is current
        if (parseInt($("#rowText" + i).attr("hour")) === currentHour) {
            // Colours row red
            $("#rowText" + i).addClass("present");
            console.log("worked");
        }
        // Tests if row is future
        else if ($("#rowText" + i).attr("hour") > currentHour) {
            // Colours row green
            $("#rowText" + i).addClass("future");
        }
        // Tests if row is past
        else if ($("#rowText" + i).attr("hour") < currentHour) {
            // Colours row grey
            $("#rowText" + i).addClass("past");
        }
    }
})

//---Save Button---
$("button").on("click", function () {
    var btnIndex = $(this).attr("index");
    var userInput = $("#rowText" + btnIndex).val();
        // Saves corresponding text to local storage
        localStorage.setItem("rowText" + btnIndex, userInput);
})
