var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("DROP DATABASE IF EXISTS mydb", function (err, result) {
  if (err) throw err;
  console.log("Database dropped");
});

con.query("CREATE DATABASE mydb", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});

con.query("USE  mydb", function (err, result) {
  if (err) throw err;
  console.log("Database selected");
});

var sql = "CREATE TABLE greetings ( lang varchar(255), greeting varchar(255))";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

var sql = "INSERT INTO greetings VALUES ( \"EN\", \"Hello\")";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Record Added");
});

var sql = "SELECT * FROM greetings";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

con.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});


