require('dotenv').config()
var app = require('./request-handler.js');

app.listen(process.env.PORT, function(){
  console.log("Serving up fresh HTML on port 3000");
})