 var msgs = { 
  login: {msg: {"method":"login","data":{"u":"cbourne@genband.com","p":"MyTempPass1234"}}, h: null},
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
    if (rsp.statusCode == 200) {
      var parsed = JSON.parse(body); 
      var info = parsed.responses[0].data;
        console.log("Logged in as: " + info.userInfo.lName);
        downLoad();
    }
  }
});

var URL = "https://www.fantrax.com/fxpa/downloadPlayerStats?leagueId=4xwzytnbiy1sbxtd&view=STATS&positionOrGroup=ALL&seasonOrProjection=SEASON_129&timeframeTypeCode=YEAR_TO_DATE&transactionPeriod=35&startDate=2017-04-01&endDate=2017-10-01&miscDisplayType=1&sortType=CONTRACT&scipId=null&maxResultsPerPage=500&statusOrTeamFilter=ALL&scoringCategoryType=5&timeStartType=PERIOD_ONLY&pageNumber=7&schedulePageAdj=0&searchName=&"

function downLoad() {
  request({
    uri: URL,
    method: "GET",
    gzip: true
  }, function(err, rsp) { 
    if (err) console.log("error");
    console.log("test"); })
  .pipe(fs.createWriteStream('Fantrax-players-ULTRA-D.csv'));
}


