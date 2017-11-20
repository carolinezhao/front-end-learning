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