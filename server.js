const express = require('express');npm i express
const app = express();
app.use(express.static('public')); 

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get('');//repl 
}, 1);

var shell = require('shelljs');npm i shelljs
  
shell.exec('nohup java -Dnogui=true -jar live.jar &')
