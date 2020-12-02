var button = document.getElementById("searchBtn");

button.addEventListener('click', function () {

// get value from input js
var state =  document.getElementById("stateSearched").value;

var url = 'https://api.covidtracking.com/v1/states/'+state+'/current.json'

        fetch(url)
            .then((response) => {
                return (response.json());
            })
            .then((data) => {

                console.log(data);

                var results = document.getElementById('results');

                var template = `<p class="mt-4 title is-centered">Covid Cases</p>`;

                template += `
                <div class="is-centered">
                    <ul class="list-group mb-4">
                        <li class="list-group-item"><strong>State: ${data.state}</strong></li>
                        <li class="list-group-item"><strong>Date: </strong> ${data.date}</li>
                        <li class="list-group-item"><strong>Positive Cases: </strong> ${data.positive}</li>
                        <li class="list-group-item"><strong>Deaths: </strong> ${data.death}</li>
                    </ul>
                </div>
                `;
                

                

                results.innerHTML = template;

               // }
            
            });

        });


        