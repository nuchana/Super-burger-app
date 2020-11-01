var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8000,
  user: "root",
  password: "Apple@1324",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
