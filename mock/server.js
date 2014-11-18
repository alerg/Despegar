var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8080;

app.get('/hotel', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.type('json');
	res.send('{"hotels" : [ {"name" : "Rio Othon Palace","address" : "Cesare Street 321","stars" : "3","description" : "Confortable","rating" : "8","comments" : "20","price" : "215","availability" : {"from" : "2013-03-02","to" : "2013-03-22"}},{"name" : "Granada Hotel Rio de Janeiro","address" : "Fake street 123","stars" : "4","description" : "Muy Confortable","rating" : "8","comments" : "60","price" : "148","availability" : {"from" : "2013-02-01","to" : "2013-02-28"}},{"name" : "Ibiza Hotel","address" : "Via Cesare Battisti 133","stars" : "2","description" : "Poco confortable","rating" : "5","comments" : "10","price" : "127","availability" : {"from" : "2013-05-12","to" : "2013-05-18"}},{"name" : "Rio Othon Palace 2","address" : "Cesare Street 221","stars" : "3","description" : "Confortable","rating" : "7","comments" : "5","price" : "200","availability" : {"from" : "2013-03-06","to" : "2013-03-10"}}]}');
});

app.listen(port);
console.log('Mock hoteles en el puerto ' + port);