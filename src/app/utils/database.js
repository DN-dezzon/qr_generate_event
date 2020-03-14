// // get the client
const mysql = require("mysql2/promise");  
  
var mysqlSettings = { 
  host: 'production.c3qdnx3xy72i.ap-southeast-1.rds.amazonaws.com',
  user: "admin",
  database: "event_prog", 
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0, 
  password: '$p1nn3k13'
};

const pool = mysql.createPool(mysqlSettings);
pool.on("acquire", function (connection) {
//   logger.info("Connection %d acquired", connection.threadId);
});

pool.on("enqueue", function () {
//   logger.info("Waiting for available connection slot");
});

pool.on("release", function (connection) {
//   logger.info("Connection %d released", connection.threadId);
});

var getConnection = function (callback) {
  pool.getConnection(function (err, connection) {
    callback(err, connection);
  });
};

module.exports.getConnection = getConnection;
module.exports.pool = pool; 