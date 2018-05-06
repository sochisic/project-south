var express = require('express');
var app = express();

// app.use(function (error, req, res, next) {
//   // Any request to this server will get here, and will send an HTTP
//   // response with the error message 'woops'
//   console.log(req);

//   console.error(err.stack);

//   // res.status(500).send('Wtf! Something broke!');
// });

var PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico')
});

app.get('/static/:path/:name', (req, res, next) => {
  var options = {
    root: __dirname + '/static/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var path = req.params.path;
  var fileName = req.params.name;

  res.sendFile(path + '/' + fileName, options, function (err) {
    if (err) {
      console.log(err);
      (err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);