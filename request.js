 var msgs = { 
  login: {msg: {"method":"login","data":{"u":"cbourne@genband.com","p":"MyTempPass1234"}}, h: null},
  getLeagueHomeInfo: {msg: {"method":"getLeagueHomeInfo","data":{}}, h: handleLeagueHomeInfo},
  getFantasyLeagueInfo: {msg: {"method":"getFantasyLeagueInfo","data":{}, h: null}},
  getFantasyColumns: {msg: {"method":"getFantasyColumns","data":{"maxResult":8}}, h: null},
  getHeadlineNewsNoContent: {msg: {"method":"getHeadlineNewsNoContent","data":{"maxResult":8}}, h: null}
};

var fs = require('fs');
var request = require ('request');
// require('request').debug = true

var j = request.jar();
request = request.defaults({jar: j});

request({
    uri: 'https://www.fantrax.com/fxpa/req',
    method: 'POST',
    body: JSON.stringify({
      "msgs":[msgs.login.msg],
      "ng2":true
    }),
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
    },
  }, function (err, rsp, body) {
  if (err) {
    console.log(err);
  }
  else {
    // console.log("here: " + rsp.statusCode);
    if (rsp.statusCode == 200) {
      // console.log(j);
      var parsed = JSON.parse(body); 
      var rsp = parsed.responses[0].data;
        // console.log(r.data);
        console.log("Logged in as: " + rsp.userInfo.lName);
        downLoad();
    }
  }
}) 

function downLoad() {
  request({
    uri: "https://www.fantrax.com/fxpa/downloadPlayerStats?leagueId=4xwzytnbiy1sbxtd",
    method: "GET",
    gzip: true
  }).pipe(fs.createWriteStream('Fantrax-players-ULTRA-D.csv'));
}

function getLeagues(username, leagues)
{
  var rqsts = [msgs.getLeagueHomeInfo];
  leagues.forEach((l) => {
    const lid = l.leaguesTeams[0].leagueId;
    console.log('https://www.fantrax.com/fxpa/req?leagueId=' + lid);
    request({
      uri: 'https://www.fantrax.com/fxpa/req?leagueId=' + lid,
      method: "POST",
      body: JSON.stringify({
        "msgs": rqsts.map((i) => i.msg),
        "ng2":true}),
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
      }
     },
     function(err, rsp, body) {
      // console.log("here: " + rsp.statusCode);
      if (err) {
        console.log(err);
      }
      else {
        if (rsp.statusCode == 200) {
         var parsed = JSON.parse(body);
         parsed.responses.forEach((r, i) => {
            if (rqsts[i].h) {
              rqsts[i].h(r.data);
            }
         });
        }
      }
     });
  });
}

function handleLeagueHomeInfo(data) {
  // console.log(data);
  data.fantasyTeams.forEach((t) => {
    console.log(t.name);
  });
}

setTimeout(() => console.log("done"), 3000);

//https://www.fantrax.com/cometd?leagueId=4xwzytnbiy1sbxtd



//var Fantrax = require('./api');
//var myFantrax = new Fantrax();

//setInterval(function() {
  //myFantrax.fetchData();
//}, 1500);

//login
//get stats page
//parse
//post data to proper location
