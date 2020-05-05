//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dyrcocinas'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/dyrcocinas/index.html'));
});

