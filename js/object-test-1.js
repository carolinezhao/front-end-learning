var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color; // undefined, not null

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(obj)           
            console.log(objName)
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    console.log(result);              
    return result;
}
showProps(myCar, "myCar");