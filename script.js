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


        