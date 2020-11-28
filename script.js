$(document).ready(function(){
    //get JSON data from url
    $.getJSON("https://api.covidtracking.com/v1/states/current.json", function(data){
        var state = [];
        var date = [];
        var positive = [];
        var death = [];


        //console.log(data);

        $.each(data, function(id,object){
            state.push(object.state);



        });

        console.log(state);




    });
});
