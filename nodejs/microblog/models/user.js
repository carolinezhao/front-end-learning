// var mongodb= require('./db-old') // 旧版不可用

// var mongoUtil = require('./db')
// var db = mongoUtil.getDb()

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'microblog';

function User(user) {
    this.name = user.name
    this.password = user.password
}
module.exports = User

// 接口1：对象实例的方法，用于将用户对象的数据保存到数据库中。
User.prototype.save = function save(callback) {
    // 存入 Mongodb 的文档
    var user = {
        name: this.name,
        password: this.password
    }
    console.log(user)
    // Use connect method to connect to the server

    // mongoUtil.connectToServer(function(err) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        // console.log(client)
        // console.log(db)

        if (err) {
            return callback(err)
        }
        // 读取 users 集合
        db.collection('users', function (err, collection) {
            console.log('collection of users')
            if (err) {
                client.close();
                return callback(err)
            }
            // 为 name 属性添加索引
            collection.ensureIndex('name', {
                unique: true
            }, function (err, result) { // test
                console.log(result) // name_1        
            })
            // 写入 user 文档
            collection.insert(user, {
                safe: true
            }, function (err, user) {
                client.close();
                callback(err, user)
            })
        })
    })
}

// 旧版方法
// User.prototype.save = function save(callback) {
//     // 存入 Mongodb 的文档
//     var user = {
//         name: this.name,
//         password: this.password
//     }
//     console.log(user)
//     mongodb.open(function(err, db) {
//         if (err) {
//             return callback(err)
//         }
//         // 读取 users 集合
//         db.collection('users', function(err, collection) {
//             if(err) {
//                 mongodb.close()
//                 return callback(err)
//             }
//             // 为 name 属性添加索引
//             collection.ensureIndex('name', {unique: true})
//             // 写入 user 文档
//             collection.insert(user, {safe: true}, function(err, user) {
//                 mongodb.close()
//                 callback(err, user)
//             })
//         })
//     })
// }

// 接口2：对象构造函数的方法，用于从数据库中查找指定的用户。
User.get = function get(username, callback) {
    // mongoUtil.connectToServer(function(err) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        if (err) {
            return callback(err)
        }
        // 读取 users 集合
        db.collection('users', function (err, collection) {
            if (err) {
                client.close();
                return callback(err)
            }
            // 查找 name 属性为 username 的文档
            collection.findOne({
                name: username
            }, function (err, doc) {
                client.close();
                if (doc) {
                    // 封装文档为 User 对象
                    var user = new User(doc)
                    callback(err, user)
                } else {
                    callback(err, null)
                }
            })
        })
    })
}

// 旧版方法
// User.get = function get(username, callback) {
//     mongodb.open(function (err, db) {
//         if (err) {
//             return callback(err)
//         }
//         // 读取 users 集合
//         db.collection('users', function (err, collection) {
//             if (err) {
//                 mongodb.close()
//                 return callback(err)
//             }
//             // 查找 name 属性为 username 的文档
//             collection.findOne({
//                 name: username
//             }, function (err, doc) {
//                 mongodb.close()
//                 if (doc) {
//                     // 封装文档为 User 对象
//                     var user = new User(doc)
//                     callback(err, user)
//                 } else {
//                     callback(err, null)
//                 }
//             })
//         })
//     })
// }