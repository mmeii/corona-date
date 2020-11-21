// divs for the events
// search by state - id for search areas
// use that value to get ajax for ticketmaster
// show events

var tmApiKey = "8kgPxBSFeVlG7NG88rBInuGMhGNe2GkR";

function eventSearch(state) {
    var url = `https://app.ticketmaster.com/discovery/v2/events.json?stateCode=${state}&apikey=${tmApiKey}`;

    $.ajax({
        url: url,
        method: "GET"
    }).then(function(tmResponse) {
        console.log(tmResponse);

    });
}

$(document).on("click", ".searchBtn", function() {
    var searchState = $(".stateSearched").text();
    currentCondition(searchState);
});