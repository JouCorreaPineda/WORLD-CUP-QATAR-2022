const ENV = "production";
// const ENV = "dev";

let ApiUrl = ENV == "dev" ? "http://localhost:8000" : "https://wc22-api-server.onrender.com";


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

fetch(`${ApiUrl}`+'/firstmatches')
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
.then((data) => {
    const teams = document.getElementById('teams');
    teams.addEventListener('click',()=>{
      data.forEach(element=>{
        var div = document.createElement('div');
        teams.appendChild(div);
        div.innerHTML = element.country
      });
    });
});


document.addEventListener('DOMContentLoaded',()=>{
  fetch(`${ApiUrl}`+'/predictions')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    data.forEach(element=>{
      let submittals = document.getElementById('submittals');
      let userPrediction = document.createElement('div');
      userPrediction.classList.add('predictionRow')

      let userName = document.createElement('div');
      userName.innerHTML = element.name;
      userName.classList.add('prediction')
      userPrediction.appendChild(userName);

      let userTeam = document.createElement('div');
      userTeam.innerHTML = element.team;
      userTeam.classList.add('prediction')
      userPrediction.appendChild(userTeam);

      submittals.appendChild(userPrediction);
    });
  });
});


document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('submittals');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Name = document.getElementById('inputName').value;
    let Team = document.getElementById('inputTeam').value;

    fetch(`${ApiUrl}`+'/predictions', {
      method: 'POST',
      body: JSON.stringify({
        name:Name,
        team:Team,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      })
      .then(response => response.json())
      .then(data => {
        data.forEach(element=>{
          let submittals = document.getElementById('submittals');
          let userPrediction = document.createElement('div');
          userPrediction.classList.add('predictionRow')
    
          let userName = document.createElement('div');
              userName.innerHTML = element.name;
              userPrediction.appendChild(userName);
    
          let userTeam = document.createElement('div');
              userTeam.innerHTML = element.team;
              userPrediction.appendChild(userTeam);
    
          submittals.appendChild(userPrediction);
        })
      })
      .catch(error => console.error('Error:', error));
  });
});