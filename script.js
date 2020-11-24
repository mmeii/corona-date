
/*let requestURL = 'https://api.covidtracking.com/v1/us/current.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
*/



async function covidTracking() {

    var queryURL = "https://api.covidtracking.com/v1/us/current.json";

    var response = await $.ajax({
        url: queryURL,
        method: "GET"
      })
        console.log(response);

        var currentCovidNum = $("<div class='card-body' id='states'>");
        var getCurrentNum = response.name;
        
        
        var uvResponse = await $.ajax({
            url: uvURL,
            method: "GET"
        })
    }