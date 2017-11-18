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