'use strict';
var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

var questions = [
    {
        type: "input",
        name: "idsearched",
        message: "what is the ID of the product you are searching for?",
        validate: function(value) {
            var pass = value.match(
                /[1234567890]/g
                
            );
            if (pass) {
                return true
            }
            return 'Please enter a number'
        }

    },
    {
        type: "input",
        name: "numbersearched",
        message: "how many of this product are you looking to buy?",
        validate: function(value) {
            var pass = value.match(
                /[1234567890]/g
                
            );
            if (pass) {
                return true
            }
            return 'Please enter a number'
        }


    }

]

connection.connect(function(err) {
    if (err) throw err;
    runApp();   
})

function runApp() {
    function startMessage() {
    console.log("WELCOME TO BAMAZON!");
    console.log("---------------");
    var list = "SELECT * FROM bamazon.products";
    connection.query(list, function(err, res) {
        if (err) throw err;
        for (var i =0; i <res.length; i++) {
            console.log(
                "id: " +
                res[i].id +
                " || Product name: " +
                res[i].product_name +
                " || Price: " +
                res[i].price
            )
        }
    })
    console.log("press any key to continue");
    connection.end();
}
    console.log("------------")
    function startQuestions(callback) {
    inquirer
  .prompt(questions)
  .then(answers => {
      console.log("here is what you said");
      console.log(JSON.stringify(answers, null, "  "));
  })
  callback();
    connection.end
   
   
}

startQuestions(startMessage);
}