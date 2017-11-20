var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');
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
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}

// 在存储中设置值
// Storage.setItem() 方法可被用来创建新数据项和更新已存在的值。该方法接受两个参数——要创建/修改的数据项的键，和对应的值。
// populateStorage() 方法在本地存储中设置三项数据 — 背景颜色、字体和图片路径。然后执行 setStyles() 方法来更新页面的样式。
function populateStorage() {
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);
    setStyles();
}

// 为每个表单元素绑定了一个 onchange 监听器，这样，一个表单值改变时，存储的数据和页面样式会更新。
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;