function callValue(){
    var name = document.getElementById("uname").value;
    var designation = document.getElementById("udesignation").value;
    var phone = document.getElementById("ph").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var linkedIn = document.getElementById("linkedIn").value;
    var skype = document.getElementById("skype").value;

    document.writeln("YOUR INFO: <br> "+ "Name: "+name+"<br>");
    document.writeln("Designation: "+designation);
    document.writeln("Contact Details: <br> "+ "Phone Number: "+phone+"<br>");
    document.writeln("email: "+email);
    document.writeln("location: "+location);
    document.writeln("linkedIn: "+linkedIn);
    document.writeln("skype: "+skype);
}

// var express = require('express');  
// var app = express();  
// app.use(express.static('public'));  
  
// app.get('/index.html', function (req, res) {  
//    res.sendFile( __dirname + "/" + "index.html" );  
// })  
// app.get('/process_get', function (req, res) {  
// response = {  
//        first_name:req.query.first_name,  
//        last_name:req.query.last_name  
//    };  
//    console.log(response);  
//    res.end(JSON.stringify(response));  
// })  
// var server = app.listen(8000, function () {  
  
//   var host = server.address().address  
//   var port = server.address().port  
//   console.log("Example app listening at http://%s:%s", host, port)  
  
// })  