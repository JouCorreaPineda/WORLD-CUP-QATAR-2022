module.export = {
  dev:{apiUrl: 'http://localhost:', 
    port: 3000},
  production:{apiURL: process.env.API_URL, 
    port:process.env.PORT}
}

//QUESTIONS:
//can I name it whatever I want or does it have to be apiURL?
//where did the API_URL come from?