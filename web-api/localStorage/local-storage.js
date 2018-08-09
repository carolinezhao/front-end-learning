// Web Storage 包含如下两种机制：
// sessionStorage 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
// localStorage 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

// Save data to the current local store
localStorage.setItem("username", "rabbit");
// Access some stored data
// alert("username = " + localStorage.getItem("username"));

// Save data to sessionStorage
sessionStorage.setItem('job', 'fe');
// Get saved data from sessionStorage
var data = sessionStorage.getItem('job');
// alert("job = " + data);
// Remove saved data from sessionStorage
// sessionStorage.removeItem('job');
// Remove all saved data from sessionStorage
// sessionStorage.clear();


// 记录页面查看次数
var numTimes = localStorage.getItem("visits-Hlfma");
console.log(numTimes);
if (numTimes == null) {
    numTimes = 0;
} else {
    numTimes = parseInt(numTimes, 10);
}
numTimes++;
localStorage.setItem("visits-Hlfma", numTimes);
document.getElementById("visit-times").textContent = numTimes;


let pElem = document.querySelector('p'); // 显示文本
let imgElem = document.querySelector('img'); // 显示图片
let chosenFont = document.getElementById('font'); // 选择文本
let chosenImage = document.getElementById('image'); // 选择图片

// 检查本地存储是否已被填充
// 如果没有，则创建；如果有值存在，则更新。
// 还可以使用 Storage.length 来测试存储对象是否为空。
console.log(localStorage.length);
if (!localStorage.getItem('font') || !localStorage.getItem('image')) {
    populateStorage();
} else {
    setStyles();
}

// 从存储中获取值
// 同时将值显示到表单元素中，并更新页面的样式和图片。
function setStyles() {
    console.log('call setStyles');
    let currentFont = localStorage.getItem('font');
    let currentImage = localStorage.getItem('image');
    console.log(currentFont, currentImage);
    chosenFont.value = currentFont; // select
    chosenImage.value = currentImage; // select
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}

// 在存储中设置值
// 创建新数据项 or 更新已存在的值。两个参数：key, value.
function populateStorage() {
    console.log('call populateStorage');
    localStorage.setItem('font', chosenFont.value);
    localStorage.setItem('image', chosenImage.value);
    setStyles();
}

// 为每个表单元素绑定一个 onchange 监听器，表单值改变时，存储的数据和页面样式会更新。
chosenFont.onchange = populateStorage;
chosenImage.onchange = populateStorage;