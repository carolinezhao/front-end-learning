// 设计模式 3.2.4

var currying = function (fn) {
    var args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    };
};

var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            money += arguments[i];
        }
        return money;
    };
})();

var cost = currying(cost);

cost(100);
cost(200);
cost(50);

console.log(cost());