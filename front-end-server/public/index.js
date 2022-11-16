const ENV = "production";
// const ENV = "dev";

let ApiUrl = ENV == "dev" ? "http://localhost:3001" : "https://wc22-api-server.onrender.com";
console.log("API:", ApiUrl);

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
        var predictionRow = document.createElement('div');
        predictionRow.classList.add("predictionRow");
  
        var name = document.createElement('div');
        name.classList.add("name")
        name.innerHTML = element.name;
        predictionRow.appendChild(name);
  
        var prediction = document.createElement('div');
        prediction.classList.add("prediction")
        prediction.innerHTML = element.prediction;
        predictionRow.appendChild(prediction);

        const predictionRowContainer = document.querySelector("#predictionRowContainer");
        predictionRowContainer.appendChild(predictionRow);
       });
  });



  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener('click',()=>{
    const inputName = document.getElementById("inputName").value;
    const inputTeam = document.getElementById("inputTeam").value;

    fetch(`${apiUrl}'/predictions`, {
      method: "POST",
      body: JSON.stringify({
          name: inputName ,
          team: inputTeam,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response=> response.json())
    .then(data=>
      data.forEach(element =>{
        
        var predicitionRow = document.createElement('div');
        predictionRow.classList.add("predictionRow");

        var name = document.createElement('div');
        name.innerHTML = `${inputName}`;
        predicitionRow.appendChild(name);

        var prediction = document.createElement('div');
        prediction.innerHTML = `${inputTeam}`;
        predicitionRow.appendChild(prediction);

        const predictionRowContainer = document.querySelector("#predictionRowContainer");
        predictionRowContainer.appendChild(predictionRow);
      })
    )
    .catch(error => console.error('Error:', error)); 
 });
  