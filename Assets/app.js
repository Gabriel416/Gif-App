var apiSource = "https://api.giphy.com/v1/gifs/";
var apiKey = "your_api_key";
var apiSearch = "search?q=";
//limit the amount of gifs to 10.
var apiLimit = "&limit=10";
var topics = ["indiana jones", "star wars", "fight club", "titanic", "the breakfast club"];
//

//Whenever you click the submit button trigger the following events
$("#submission").click(function(event) {
    event.preventDefault();
    //get the value of the user input
    var storeInfo = $("#addMovie").val();
    console.log(storeInfo);
    //create a new button for each search performed
    var newButton = document.createElement("BUTTON");
    newButton.setAttribute("class", "nuevo btn btn-primary");
    newButton.innerHTML = storeInfo;
    newButton.setAttribute("style", "margin-left: 5px;")
        //Append the new button to top of page
    $("#movieButtons").append(newButton);

    var request = $.ajax({
        url: apiSource + apiSearch + storeInfo + apiLimit + apiKey,
        method: "GET"
    }).done(function(response) {
        var info = response.data;
        //loop through all the data and perform the following
        for (var i = 0; i < info.length; i++) {
            //Make sure the gifs aren't rated R
            if (info[i].rating !== "r") {
                //created a DIV, IMG, and P tag to eventuall attach to main gif div in the html page.
                var specialGif = $("<div class='uniqueGif'>");
                //got the url for each special gif
                var img4Gif = $("<img>").attr("src", info[i].images.fixed_height.url);
                //got the rating for each special gif
                var rating = info[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);
                //attached the p and image tag to temporary div to attach to main div in html
                specialGif.append(ratingP);
                specialGif.append(img4Gif);
                $("#movieGifs").prepend(specialGif);
            }
        };
    });
    console.log(request);
    //emptied out
    clearOut();
});


//Whenver you click on the indiana jones button trigger 
//the same events as the one above except we don't
//hav to store the user value or create a button.
$("#indiana-jones").click(function(event) {
    var request = $.ajax({
        url: apiSource + apiSearch + topics[0] + apiLimit + apiKey,
        method: "GET",
    }).done(function(response) {
        var info = response.data;

        for (var i = 0; i < info.length; i++) {

            if (info[i].rating != "r") {

                var specialGif = $("<div class='uniqueGif'>");
                var img4Gif = $("<img>").attr("src", info[i].images.fixed_height.url);
                var rating = info[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);

                specialGif.append(ratingP);
                specialGif.append(img4Gif);
                $("#movieGifs").prepend(specialGif);
            }
        };
    });
    console.log(request);
    clearOut();
});


//Whenver you click on the star wars button trigger 
//the same events as the first click event except we don't
//hav to store the user value or create a button.
$("#Star-Wars").click(function(event) {
    event.preventDefault();
    // var storeInfo = $("#addMovie").val();
    // console.log(storeInfo);

    var request = $.ajax({
        url: apiSource + apiSearch + topics[1] + apiLimit + apiKey,
        method: "GET",
    }).done(function(response) {

        var info = response.data;

        for (var i = 0; i < info.length; i++) {

            if (info[i].rating != "r") {

                var specialGif = $("<div class='uniqueGif'>");
                var img4Gif = $("<img>").attr("src", info[i].images.fixed_height.url);
                var rating = info[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);

                specialGif.append(ratingP);
                specialGif.append(img4Gif);
                $("#movieGifs").prepend(specialGif);
            }
        };
    });
    console.log(request);
    clearOut();
});

//Whenver you click on the fight club button trigger 
//the same events as the first click event except we don't
//hav to store the user value or create a button.
$("#Fight-Club").click(function(event) {
    event.preventDefault();
    // var storeInfo = $("#addMovie").val();
    // console.log(storeInfo);

    var request = $.ajax({
        url: apiSource + apiSearch + topics[2] + apiLimit + apiKey,
        method: "GET",
    }).done(function(response) {

        var info = response.data;

        for (var i = 0; i < info.length; i++) {

            if (info[i].rating != "r") {

                var specialGif = $("<div class='uniqueGif'>");
                var img4Gif = $("<img>").attr("src", info[i].images.fixed_height.url);
                var rating = info[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);

                specialGif.append(ratingP);
                specialGif.append(img4Gif);
                $("#movieGifs").prepend(specialGif);
            }
        };
    });
    console.log(request);
    clearOut();
});

//Whenver you click on the titanic button trigger 
//the same events as the first click event except we don't
//hav to store the user value or create a button.
$("#titanic").click(function(event) {
    event.preventDefault();
    // var storeInfo = $("#addMovie").val();
    // console.log(storeInfo);

    var request = $.ajax({
        url: apiSource + apiSearch + topics[3] + apiLimit + apiKey,
        method: "GET",
    }).done(function(response) {

        var info = response.data;

        for (var i = 0; i < info.length; i++) {

            if (info[i].rating != "r") {

                var specialGif = $("<div class='uniqueGif'>");
                var img4Gif = $("<img>").attr("src", info[i].images.fixed_height.url);
                var rating = info[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);

                specialGif.append(ratingP);
                specialGif.append(img4Gif);
                $("#movieGifs").prepend(specialGif);
            }
        };
    });
    console.log(request);
    clearOut();
});

//Whenver you click on the Breakfast club button trigger 
//the same events as the first click event except we don't
//hav to store the user value or create a button.
$("#Breakfast-Club").click(function(event) {
    event.preventDefault();
    // var storeInfo = $("#addMovie").val();
    // console.log(storeInfo);

    var request = $.ajax({
        url: apiSource + apiSearch + topics[4] + apiLimit + apiKey,
        method: "GET",
    }).done(function(response) {

        var info = response.data;

        for (var i = 0; i < info.length; i++) {

            if (info[i].rating != "r") {

                var specialGif = $("<div class='uniqueGif'>");
                var img4Gif = $("<img>").attr("src", info[i].images.fixed_height.url);
                var rating = info[i].rating;
                var ratingP = $("<p>").text("Rating: " + rating);

                specialGif.append(ratingP);
                specialGif.append(img4Gif);
                $("#movieGifs").prepend(specialGif);
            }
        };
    });
    console.log(request);
    clearOut();
});



//clear the movieGif div of all content if another topic is clicked or searched.
function clearOut() {
    $("#movieGifs").empty();
};
