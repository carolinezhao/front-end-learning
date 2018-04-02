var settings = require('../settings')
var Db = require('mongodb').Db
var Connection = require('mongodb').Connection
var Server = require('mongodb').Server

// module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}))
// Error: Cannot read property 'DEFAULT_PORT' of undefined
// 改为 mongodb 的默认端口号 27017
module.exports = new Db(settings.db, new Server(settings.host, 27017, {}))
// 输出了创建的数据库连接。