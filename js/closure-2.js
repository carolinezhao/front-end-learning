// 《Node.js 开发指南》附录A.2闭包
// 闭包的用途：1.嵌套的回调函数；2.隐藏对象的细节

// 嵌套的回调函数
// 以下代码是在 Node.js 中使用 MongoDB 实现增加用户的功能。不需要了解细节，只了解逻辑即可。

// 用到了闭包的层层嵌套，每一层的嵌套都是一个回调函数。回调函数不会立刻执行，而是等待相应请求处理完后由请求的函数回调。
// 在嵌套的每一层中都有对 callback 的引用，而且最里层还用到了外层定义的 uid 变量。
// 由于闭包机制的存在，即使外层函数已经执行完毕，其作用域内申请的变量也不会释放，因为里层的函数还有可能引用到这些变量，这样就完美地实现了嵌套的异步回调。

// 但这种实现方法并不是最优的，控制流优化方法见 Node.js 开发指南第6章。

exports.add_usr = function (user_info, callback) {
    var uid = parseInt(user_info['uid']);
    mongodb.open(function (err, db) {
        if (err) {
            callback(err);
            return;
        }
        db.collection('users', function (err, collection) {
            if (err) {
                callback(err);
                return;
            }
            collection.ensureIndex('uid', function (err) {
                if (err) {
                    callback(err);
                    return;
                }
                collection.ensureIndex('username', function (err) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    collection.findOne({
                        uid: uid
                    }, function (err) {
                        if (err) {
                            callback(err);
                            return;
                        }
                        if (doc) {
                            callback('occupied');
                        } else {
                            var user = {
                                uid: uid,
                                user: user_info
                            };
                            collection.insert(user, function (err) {
                                callback(err);
                            });
                        }
                    });
                });
            });
        });
    });
};