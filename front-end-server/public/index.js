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

  fetch(`${ApiUrl}`+'/predictions')
  .then(response => response.json())
  .then(data => {
      data.forEach(element => {
        var predicitonRow = document.createElement('div');
        predicitonRow.classList.add("predictionRow");
  
        var name = document.createElement('div');
        name.innerHTML = element.name;
        predicitonRow.appendChild(name);
  
        var prediction = document.createElement('div');
        prediction.innerHTML = element.prediction;
        predicitonRow.appendChild(prediction);

        const predictionRowContainer = document.querySelector("#predictionRowContainer");
        predictionRowContainer.appendChild(predicitonRow);
       });
  });



  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener('click',()=>{
    const inputName = document.querySelector("#inputName").value;
    const inputTeam = document.querySelector("#inputTeam").value;

    fetch(`${apiUrl}`+'/submittals', {
      method: "POST",
      body: JSON.stringify({
          name: inputName ,
          team: inputTeam,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    // var predicitonRow = document.createElement('div');
    // predicitonRow.classList.add("predictionRow");

    // var name = document.createElement('div');
    // name.innerHTML = inputName;
    // predicitonRow.appendChild(name);

    // var prediction = document.createElement('div');
    // prediction.innerHTML = inputTeam;
    // predicitonRow.appendChild(prediction);

    // const predictionRowContainer = document.querySelector("#predictionRowContainer");
    // predictionRowContainer.appendChild(predicitonRow);
});
   
  