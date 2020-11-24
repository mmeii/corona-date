$(document).ready(function(){
    //get JSON data from url
    $.getJSON("https://api.covidtracking.com/v1/states/info.json", function(data){
        var states = [];



        console.log(data);
    }
    )
});