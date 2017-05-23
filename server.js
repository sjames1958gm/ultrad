var fs = require("fs");
var express = require("express");
var session = require('express-session')

var app = express();

app.set('port', (process.env.PORT || 8080));

console.log("Starting server on: " + app.get('port'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(function(req, res, next) {
  // console.log("request");
  next();
});

app.use(function(req, res, next) {
  console.log("here: " + JSON.stringify(req.headers));
  if (req.headers['x-forwarded-proto'] === 'https') {
    console.log("redirecting to: " + 'http://' + req.hostname + req.url);
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

app.get("/rankings", function(req, res, next) {
  fs.readFile("data/rankings-data.json", "utf8", function(err, data) {
    if (err) {
      res.status(500).send({ error: 'Failed to get file' });
      return;
    }
    else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/hitting", function(req, res, next) {
  fs.readFile("data/hitting-data.json", "utf8", function(err, data) {
    if (err) {
      res.status(500).send({ error: 'Failed to get file' });
      return;
    }
    else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/pitching", function(req, res, next) {
  fs.readFile("data/pitching-data.json", "utf8", function(err, data) {
    if (err) {
      res.status(500).send({ error: 'Failed to get file' });
      return;
    }
    else {
      console.log(data);
      res.json(JSON.parse(data));
    }
  });
});

app.get("/fa-hitters", function(req, res, next) {
  fs.readFile("data/fa-hitters-data.json", "utf8", function(err, data) {
    if (err) {
      res.status(500).send({ error: 'Failed to get file' });
      return;
    }
    else {
      console.log(data);
      res.json(JSON.parse(data));
    }
  });
});

app.get("/fa-pitchers", function(req, res, next) {
  fs.readFile("data/fa-pitchers-data.json", "utf8", function(err, data) {
    if (err) {
      res.status(500).send({ error: 'Failed to get file' });
      return;
    }
    else {
      console.log(data);
      res.json(JSON.parse(data));
    }
  });
});

app.use(express.static(__dirname + '/public'));

// app.get('/counter', function(req, res, next) {
//   var sess = req.session
//   if (sess.views) {
//     sess.views++
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<p>views: ' + sess.views + '</p>')
//     res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
//     res.end()
//   } else {
//     sess.views = 1
//     res.end('welcome to the session demo. refresh!')
//   }
// })

app.listen(app.get('port'), function() {
    console.log("server started on " + app.get('port'));
});

