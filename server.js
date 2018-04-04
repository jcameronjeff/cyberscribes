const express = require('express');
const path =  require('path');
const exphbs = require('express-handlebars');

var app =  express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.port || 3000));

app.listen(app.get('port'). function(){
  console.log('Server started on port' + app.get('port'))
});


app.get('/', function(req, res)){
   res.rend
}
