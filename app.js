const express = require("express");
const app = express();
var faker = require("faker");

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'ejs');
//routes for the pages
app.get("/", function(req,res){
	res.render("index.html");
});

app.get("/about", function(req,res){
	res.render("about.html");
});

app.get("/services", function(req,res){
	res.render("services.html");
});

app.get("/specs", function(req,res){
	res.render("specs.html");
});


var data = {
	name : faker.name.findName(),
	lastName : faker.name.lastName(),
	Suffix : faker.name.suffix(),
	phone: faker.phone.phoneNumber(),
	city : faker.address.city(),
	state : faker.address.state(),
	country : faker.address.country(),
	jobTitle : faker.name.jobTitle(),
	email: faker.internet.email()

}

app.get("/contact", function(req, res){
    res.render('contact', {data : data});

});

app.use(function(req,res,next){
	res.status(404).send("sorry can't find that");
});

// server.listener
// app.listen("8080","127.0.0.1", function(){
// 	console.log("Express Server is operational ...");
// });

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express Server operational ...")
});