// Web Storage 包含如下两种机制：
// sessionStorage 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
// localStorage 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

// Save data to the current local store
localStorage.setItem("username", "John");
// Access some stored data
alert("username = " + localStorage.getItem("username"));

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');
// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');
// Remove saved data from sessionStorage
sessionStorage.removeItem('key');
// Remove all saved data from sessionStorage
sessionStorage.clear();


// 记录页面查看次数
var numTimes = localStorage.getItem("visits-Hlfma");
if (numTimes == null) {
    numTimes = 0;
} else {
    numTimes = parseInt(numTimes, 10);
}
numTimes++;
localStorage.setItem("visits-Hlfma", (numTimes).toString(10))
document.getElementById("visit-times").textContent = numTimes.toString(10);

// 示例代码
var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');
// 测试本地存储是否已被填充
// 测试 bgcolor 数据项是否存在。如果不存在，执行 populateStorage() 来将存在的自定义值添加到存储中。
// 如果有值存在，则执行 setStyles() 来使用存储的值更新页面的样式。
// 还可以使用 Storage.length 来测试存储对象是否为空。
if (!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

// 从存储中获取值
// 使用 Storage.getItem() 可以从存储中获取一个数据项。该方法接受数据项的键作为参数，并返回数据值。
// 首先，前三行代码从本地中获取值。
// 接着，将值显示到表单元素中，这样在重新加载页面时与自定义设置保持同步。
// 最后，更新页面的样式和图片，这样重新加载页面后，你的自定义设置重新起作用了。
function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');

    document.getElementById('bgcolor').value = currentColor;
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;

    htmlElem.style.backgroundColor = '#' + currentColor;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}

// 在存储中设置值
// Storage.setItem() 方法可被用来创建新数据项和更新已存在的值。该方法接受两个参数——要创建/修改的数据项的键，和对应的值。
// populateStorage() 方法在本地存储中设置三项数据 — 背景颜色、字体和图片路径。然后执行 setStyles() 方法来更新页面的样式。
function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);

    setStyles();
}

// 为每个表单元素绑定了一个 onchange 监听器，这样，一个表单值改变时，存储的数据和页面样式会更新。
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;


// 通过 StorageEvent 响应存储的变化
// 无论何时，Storage 对象发生变化时（即创建/更新/删除数据项时，重复设置相同的键值不会触发该事件，Storage.clear() 方法至多触发一次该事件），StorageEvent 事件会触发。在同一个页面内发生的改变不会起作用——在相同域名下的其他页面（如一个新标签或 iframe）发生的改变才会起作用。在其他域名下的页面不能访问相同的 Storage 对象。
// 在事件结果页面中的 JavaScript 如下所示：
window.addEventListener('storage', function (e) {
    document.querySelector('.my-key').textContent = e.key;
    document.querySelector('.my-old').textContent = e.oldValue;
    document.querySelector('.my-new').textContent = e.newValue;
    document.querySelector('.my-url').textContent = e.url;
    document.querySelector('.my-storage').textContent = e.storageArea;
});