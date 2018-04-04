// var mongodb= require('./db-old') // 旧版不可用

// var mongoUtil = require('./db')
// var db = mongoUtil.getDb()

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'microblog';

function Post(username, post, time) {
    this.user = username
    this.post = post
    if (time) {
        this.time = time
    } else {
        this.time = new Date()
    }
}
module.exports = Post

// 接口1：对象实例的方法，用于将对象的变动保存到数据库。
Post.prototype.save = function save(callback) {
    // 存入 Mongodb 的文档
    var post = {
        user: this.user,
        post: this.post,
        time: this.time
    }
    console.log(post)

    // Use connect method to connect to the server
    // mongoUtil.connectToServer(function(err) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        if (err) {
            return callback(err)
        }
        // 读取 posts 集合
        db.collection('posts', function (err, collection) {
            console.log('collection of posts')
            if (err) {
                client.close();
                return callback(err)
            }
            // console.log(collection) // Collection {}

            // 为 user 属性添加索引？？？
            // collection.ensureIndex('user') //书中的写法，也可以用
            collection.createIndex('user', {
                unique: false
            }, function(err, result) {
                console.log(JSON.stringify(err)) //null
                console.log(result) // user_1         
            })

            // 写入 post 文档
            collection.insert(post, {
                safe: true
            }, function (err, post) {
                console.log(JSON.stringify(err))
                client.close();
                callback(err, post)
            })
        })
    })
}

// 旧版方法，见 user.js

// 接口2：对象构造函数的方法，用于从数据库中获取微博，可以获取全部内容，也可以按指定用户获取。
Post.get = function get(username, callback) {
    // mongoUtil.connectToServer(function(err) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        if (err) {
            return callback(err)
        }
        // 读取 posts 集合
        db.collection('posts', function (err, collection) {
            if (err) {
                client.close();
                return callback(err)
            }
            // 查找 user 属性为 username 的文档，如果 username 是 null 则匹配全部
            var query = {}
            if (username) {
                query.user = username
            }
            collection.find(query).sort({
                time: -1
            }).toArray(function (err, docs) {
                client.close();
                if (err) {
                    callback(err, null)
                }
                // 封装 posts 为 Post 对象
                var posts = []
                docs.forEach(function (doc, index) {
                    var post = new Post(doc.user, doc.post, doc.time)
                    posts.push(post)
                })
                callback(null, posts)
            })
        })
    })
}

// 旧版方法，见 user.js