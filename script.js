$(document).ready(function(){
    //get JSON data from url
    $.getJSON("https://api.covidtracking.com/v1/states/current.json", function(data){
        var state = [];
        var date = [];
        var positive = [];
        var death = [];


        
        $.each(data, function(id,object){
            state.push(object.state);
            date.push(object.date);
            positive.push(object.positive);
            death.push(object.death);


            state.shift()
            



        });

        //console.log(positive);
       // console.log(state);


    });
});
