var express = require('express');
var app = express();
var Twit = require('twit'); // this is how we import the twit package
var T = new Twit({
  consumer_key:         'd9CWuRGnK4o6YGVrkAR1Q0YJU',
  consumer_secret:      '2jmnabB7QkfenVPW49YJwueJwnsQXCbwHFms1qU4VzfsfHMDx3',
  access_token:         '473673822-olf7Ho4F3lJ935iTksrp0wDwa7Qfi1bDCW47ajmw',
  access_token_secret:  'zdOEO4SMOtmqaMGr07qvJmBYKFVOJYdvCZqsI7K92HNiU',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})
var params = {
q: 'akshay',
count: 1
}

app.get('/test', function (req, res) {
  T.get('search/tweets', params,searchedData); 
  function searchedData(err, data) {
    res.send(data)
  }
});

// var stream = T.stream('statuses/filter', { track: 'mango' })


app.get('/tweet', function (req,res) {
  var i = 0;
  T.get('search/tweets', { q: 'difteri', since:'2018-03-30', until: '2018-04-02' ,count:100,geocode:'-7.1943499,112.8164465,1000km'}, function(err, data, response) {
    result = data.statuses.map(function(obj) {
        return {
            nomer: ++i,
            tanggal: obj.created_at,
            text: obj.text,
            lokasi: obj.user.location,
        }
    });
    res.send(result);
  })
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});