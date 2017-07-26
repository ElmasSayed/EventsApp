// http://api.eventful.com/docs
var apiKey = "SS64KtgmxNNMgC94";
// search button clicked
$("#searchBtn").click(function() {
    console.log("search btn clicked")
    var searchText = $("#searchText").val();
    console.log("searchText = " + searchText);

    var queryURL = "http://api.eventful.com/json/events/search?app_key=" + apiKey + "&location=" + searchText + "&date=Future?";
    // console.log("queryURL = " + queryURL);

    // AJAX Function
    // location
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).done(function(data) {
        console.log(data);
        // console.log(JSON.stringify(data, null, 4));
        // Transfer content to html
        // $("#img").html(data.events.event[0].image.thumb.url);
        $("#title").html(data.events.event[0].title);
        $("#date").html(data.events.event[0].start_time);
        $("#description").html(data.events.event[0].description);
        $("#eventUrl").html(data.events.event[0].url);
        $("#venue").html(data.events.event[0].venue_name);
        $("#venueAdd").html(data.events.event[0].venue_address);
        $("#cityName").html(data.events.event[0].city_name);
        $("#geocode").html(data.events.event[0].geocode_type);
        $("#venue_url").html(data.events.event[0].venue_url);
    });
}); //search button click event end
// ___________________________________________________________________________________________________________________________
// category selected

$("#categories li").click(function() {
    var category = this.id;
    console.log('Clicked category: ' + category);
    var searchText = $("#searchText").val();
    var queryURL = "https://api.eventful.com/json/events/search?category=" + category + "&location=" + searchText + "&date=Future?&app_key=SS64KtgmxNNMgC94"
    console.log("queryURL = " + queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).done(function(data) {
        console.log(data);
    });
});