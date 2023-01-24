module.exports = { 
  dev: {
    connectionStrings: 'postgresql://postgres:docker@127.0.0.1:5432/worldcup2022',
    port: '8000'
  },
  production: {
    connectionStrings: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
    port: process.env.PORT
  }
};
