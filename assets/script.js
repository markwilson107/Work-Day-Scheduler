$(document).ready(function () {
    //---Date---
    // Create an array for each month name
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    // Create an array for each day of the week
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Create function for day suffix
    const nth = function (n) {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    // Get date data
    const d = new Date();
    // Adds date data too #currentDay
    $("#currentDay").text(dayNames[d.getDay()] + ", " + monthNames[d.getMonth()] + " " + d.getDate() + nth(d.getDate()));

    //---Retrieve local storage data---
    for (var i = 0; i < 9; i++) {
        if (localStorage.getItem("rowText" + i) !== null) {
            $("#rowText" + i).text(localStorage.getItem("rowText" + i));
        }
    }
})

//---Save Button---
$("button").on("click", function () {
    var btnIndex = $(this).attr("index");
    var userInput = $("#rowText" + btnIndex).val();
    if (userInput !== "") {
        // Saves current hour text to local storage
        localStorage.setItem("rowText" + btnIndex, userInput);
    }
})
