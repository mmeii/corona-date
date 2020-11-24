
let requestURL = 'https://api.covidtracking.com/v1/us/current.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

