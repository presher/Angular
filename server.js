const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var hsts = require('hsts');
const path = require('path');
var xssFilter = require('x-xss-protection');
var nosniff = require('dont-sniff-mimetype');
const request = require('request');
const axios = require('axios')

const app = express();

app.use(cors());
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(xssFilter());
app.use(nosniff());
app.set('etag', false);
app.use(
  helmet({
    noCache: true
  })
);
app.use(
  hsts({
    maxAge: 15552000 // 180 days in seconds
  })
);

app.use(
  express.static(path.join(__dirname, 'dist/softrams-racing'), {
    etag: false
  })
);



app.get('/api/members', (req, res) => {
  request('http://localhost:3000/members', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

// TODO: Dropdown!
app.get('/api/teams', (req, res) => {
  request('http://localhost:3000/teams', (err, response, body) => {
    if (response.statusCode <= 500) {
      res.send(body);
    }
  });
});

app.post('/auth/isAuthenticated', async (req, res) => {
  let users = await axios.get('http://localhost:3000/logins')
  console.log(222222, req.body)
  for(let i = 0; i < users.data.length; i++){
    console.log('iiii', users.data[i])
    if(req.body.username === JSON.stringify(users.data[i].username) && req.body.password === JSON.stringify(users.data[i].password)){
      console.log('is authenticated', true)
      res.send({authenticated: true})
    }else{
      console.log('is authenticated', false )
      res.send({authenticated: false})
    }
  }
})
// Submit Form!
app.post('/api/members/new', async (req, res) => {
  body = {
    id: "",
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    jobTitle: req.body.jobTitle,
    status: req.body.status,
    team: req.body.team
  }
 await axios.post('http://localhost:3000/members',body);
 res.redirect(301, 'http://localhost:8000/api/members')
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/softrams-racing/index.html'));
});

app.listen('8000', () => {
  console.log('Vrrrum Vrrrum! Server starting!');
});
