let express = require('express'), path = require('path')
let app = express()

let port = 8080



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/' + 'public/index.html'))
})

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/' + 'public/css/style.css'))
})

app.get('/two.min.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/' + 'node_modules/two.js/build/two.min.js'))
})



app.listen(port, function(){
  console.log('listening on port:', port);
})
