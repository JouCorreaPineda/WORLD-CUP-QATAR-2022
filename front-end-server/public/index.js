const ENV = "production";
// const ENV = "dev";

let ApiUrl = ENV == "dev" ? "http://localhost:3001" : "https://wc22-api-server.onrender.com";
console.log("API:", ApiUrl);

// var classList = document.getElementById("class-list");

fetch(`${ApiUrl}`+'/venues')
  .then(response => response.json())
  .then(data => {
    const venues = document.getElementById('venues');
    venues.addEventListener('click', ()=>{
     data.forEach(element => {
      var div = document.createElement('div');
      venues.appendChild(div);
      div.innerHTML = element.name
     });
    });
  });

fetch(`${ApiUrl}`+'/firstMatches')
  .then(response => response.json())
  .then(data => {
    const firstMatches = document.getElementById('matches');
    firstMatches.addEventListener('click', ()=>{
     data.forEach(element => {
      var div = document.createElement('div');
      firstMatches.appendChild(div);
      div.innerHTML = element.hometeam+' vs '+element.awayteam+' on '+element.date
     });
    });
  });

fetch(`${ApiUrl}`+'/teams')
  .then(response => response.json())
  .then(data => {
      const teams = document.getElementById('teams');
      teams.addEventListener('click',()=>{
        data.forEach(element=>{
          var div = document.createElement('div');
          teams.appendChild(div);
          div.innerHTML = element.country
        });
      });
  });