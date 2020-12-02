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
        // event name - 3 events
        // date
        // image
        // link to event
        $("#mainContent").empty();

        $(".hero").addClass("hero mb-4").removeClass("hero is-fullheight is-danger is-bold mb-4");
        $("#hero")
            .css("background-image", "url('Assets/Images/CoronaDate.jpg')")
            .css("background-size", "auto")
            .css("background-position", "center");

        for (let i = 0; i < 3; i++) {
            var eventInfo = {
            name: tmResponse._embedded.events[i].name,
            date: tmResponse._embedded.events[i].dates.start.localDate,
            imageUrl: tmResponse._embedded.events[i].images[0].url,
            link: tmResponse._embedded.events[i].url
            };

            var eventImg = `
                <figure class="image is-4by3 mb-2">
                    <img src="${eventInfo.imageUrl}" alt="${eventInfo.name}" />
                </figure>`;
            var eventLink = `<a href="${eventInfo.link}">Link to Event</a>`;

            var eventCard = $(`
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">${eventInfo.name}</p>
                <p class="subtitle">${eventInfo.date}</p>
                <p>${eventImg}</p>
                <p>${eventLink}</p>
              </article>
            </div>
            `);

            $("#mainContent").append(eventCard);
        }
        

    });
}

$("#searchBtn").on("click", function() {
    var searchState = $("#stateSearched").val();
    eventSearch(searchState);
    console.log(searchState);
});
