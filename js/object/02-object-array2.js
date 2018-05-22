// extract information from different objects which are stored in the same array.
// This allows us to put all of our contact objects into a unified list. 
// If the objects are contact entries, then the list is the book binding that ties all of the contact entries together.

function Person(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

var rabbit = new Person('caroline', 'zhao', '(86) 15010008888', 'rabbit@gmail.com');
var bear = new Person('bear', 'liu', '(86) 17010006666', 'bear@outlook.com');
var cat = new Person('cat', 'gadot', '18010005555', 'cat@qq.com');

var contacts = [rabbit, bear, cat];

function print(person) {
    console.log(person.firstName + ' ' + person.lastName);
}

// looking for someone in address book with a specific last name
// linear search: use a loop to check through all of the items in the array one-by-one until we see the item that we want
var search = function (lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName === lastName) {
            print(contacts[i]);
        }
    }
}
search('liu');

// To append something to the end of the array, you need to put it in the position one after the last item.
// We can do the insert in a succinct way by adding the new object directly into the array position without even giving it a name.
contacts[contacts.length] = new Person('dog', 'iron', '18010007777', 'dog@qq.com');
console.log(contacts);