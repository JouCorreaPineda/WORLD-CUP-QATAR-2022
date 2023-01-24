// const ENV = "production";
// const ENV = "dev";

// let ApiUrl = ENV == "dev" ? "http://localhost:8000" : "https://wc22-api-server.onrender.com";

const ApiUrl = "http://localhost:8000"

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


var submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click',function(){
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

      let userName = document.createElement('div');
          userName.innerHTML = element.name;
          userPrediction.appendChild(userName);

      let userTeam = document.createElement('div');
          userTeam.innerHTML = element.team;
          userPrediction.appendChild(userTeam);

      submittals.appendChild(userPrediction);
    })
  })
  .catch(error => console.error('Error:', error)); ;
});




// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener('click',()=>{
//   const inputName = document.getElementById("inputName").value;
//   const inputTeam = document.getElementById("inputTeam").value;
//   console.log(inputName)
// });

// fetch(`${ApiUrl}/predictions`, {
//   method: "POST",
//   mode: "cors",
//   body: JSON.stringify({
//     name: inputName,
//     team: inputTeam
//   }),
//   headers: {"Content-type": "application/json" }
// })
// .then(response => {response.json()})
// .then(data=>
//   data.forEach(element =>{
    
//     var predictionRow = document.createElement('div');
//     predictionRow.classList.add("predictionRow");

//     var name = document.createElement('div');
//     name.innerHTML = `${inputName}`;
//     predictionRow.appendChild(name);

//     var prediction = document.createElement('div');
//     prediction.innerHTML = `${inputTeam}`;
//     predictionRow.appendChild(prediction);

//     const predictionRowContainer = document.querySelector("#predictionRowContainer");
//     predictionRowContainer.appendChild(predictionRow);
//   })
// )
// .catch(error => console.error('Error:', error)); 

  