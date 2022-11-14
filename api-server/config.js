//create an object for dev and production and export it 

module.exports = {
  dev:{connectionStrings: 'postgresql://postgres:docker@127.0.0.1:5432/worldcup2022',
      port: '8000'},
  production:{connectionStrings: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
      port: process.env.PORT}
}

//QUESTIONS:
//Why dev and production if im only using production?
//why ?ssl=true after process.env.POSTGRES_CONNECTION_STRING?