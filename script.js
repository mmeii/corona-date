$(document).ready(function(){


 //get JSON data from url
    $.getJSON("https://api.covidtracking.com/v1/states/current.json", function(data){

        var state = [];
        var date = [];
        var positive = [];
        var death = [];

        

        var total_state;
        var total_date;
        var total_positive;
        var total_death;

        total_state = data[0].state;
        total_date = data[0].date;
        total_positive = data[0].positive;
        total_death = data[0].death;


        $("#state").append(total_state);
        $("#date").append(total_date);
        $("#positive").append(total_positive);
        $("#death").append(total_death);


        
        $.each(data, function(id,obj){
            state.push(obj.state);
            date.push(obj.date);
            positive.push(obj.positive);
            death.push(obj.death);

        });

        
        console.log(state);
    });
});




