/*$(document).ready(function(){


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


 /*
window.onload =function() {

}

function covidtracking(){

    fetch ('https://api.covidtracking.com/v1/states/current.json')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        
        console.log(data);

        let state = data.state;
       let date = data.date;
        let positive = data.positive;
        let death = data.death;

        document.getElementById('state').innerHTML = state.toLocalString('en');
        document.getElementById('date').innerHTML = date.toLocalString('en');
        document.getElementById('positive').innerHTML = positive.toLocalString('en');
        document.getElementById('death').innerHTML = state.toLocalString('death');

    })
    .catch(function(){
        console.log('error');
    })

} 


------


fetch('https://api.covidtracking.com/v1/states/current.json')
    .then((response)=> response.json())
    .then((response) => {
        console.log(response)
        var length = response.length
        var index = length - 1

        var state = document.querySelector('state')
        var positive = document.querySelector('positive')
        var death = document.querySelector('death')

     

        
    })
    


    $("#searchBtn").on("click", function() {
        var searches = $("#stateSearched").val();
        console.log(searches);
    });



    --------

const state = document.querySelector('#state');
const date = document.querySelector('#date');
const positive = document.querySelector('#positive');


let dataChart = [];

const API_URL = "https://api.covidtracking.com/v1/states/current.json";

async function covid(){
    const res = await fetch(API_URL);
    //console.log(res)
    const data = await res.json();
    console.log(data)

    if(res.status === 4 || res.status === 200 ){
        date.textContent = new Date(data.Date).toDateString();

        if( state ===''){
            state[1].textContent = StateSearched;
        }


        
    }else{
        chart.innerHTML = '<h2> loading... </h2>';
    }

}

covid();

-------------




const logBtn = document.getElementById('searchBtn');
logBtn.addEventListener('click', fetchData);

async function fetchData() {

    const response = await fetch('https://api.covidtracking.com/v1/states/current.json');
    const data = await response.json();

    data.forEach(obj => {
        Object.entries(obj).forEach(([stateSearched, date]) => {
            console.log(`${stateSearched} ${date}`);
        });
        console.log('-------------------');




        
    });
}
*/


var button = document.getElementById("searchBtn");

button.addEventListener('click', function () {

// get value from input js
var state = 'oh'

var url = 'https://api.covidtracking.com/v1/states/'+state+'/current.json'

        fetch(url)
            .then((response) => {
                return (response.json());
            })
            .then((data) => {

                console.log(data);


                //for(i=0; i<data.length; i++){ 

                var results = document.getElementById('results');

                var template = `<h4 class="mt-4">Covid Cases</h4>`;

                template += `
                <ul class="list-group mb-4">
                    <li class="list-group-item"><strong>State: ${data.state}</strong></li>
                    <li class="list-group-item"><strong>Date: </strong> ${data.date}</li>
                    <li class="list-group-item"><strong>Positive Cases: </strong> ${data.positive}</li>
                    <li class="list-group-item"><strong>Deaths: </strong> ${data.death}</li>
                    
                </ul>
            `;
                

                console.log(template);

                results.innerHTML = template;

               // }
            
            });

        });


        