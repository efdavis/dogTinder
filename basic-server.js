require('dotenv').config()
var app = require('./request-handler.js');

app.listen(3000, function(){
  console.log("Serving up fresh HTML on port 3000");
})