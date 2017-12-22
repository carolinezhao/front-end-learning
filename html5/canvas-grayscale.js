/*================================
知识点
*** getImageData() ***
var imgData = context.getImageData(x,y,width,height);
x,y 起始坐标；w,h 长宽。
得到的是一个包含各像素rgba值的数组 CanvasPixeArray

对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。
通过以下方式获得被返回的 ImageData 对象中第一个像素的 color/alpha 信息：
red = imgData.data[0];
green = imgData.data[1];
blue = imgData.data[2];
alpha = imgData.data[3];
因为每个像素包含rgba这4个值，所以每个像素占据数组中的4个位置，也就是[r1,g1,b1,a1,r2,g2,b2,a2,r3,g3,b3,a3...]这样一直排列下去，数组的长度length = w * h * 4


*** putImageData() ***
将图像数据放回画布
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
imgData	规定要放回画布的 ImageData 对象。
x 左上角的 x 坐标，以像素计。
dirtyX	可选。水平值（x），以像素计，在画布上放置图像的位置。
dirtyWidth	可选。在画布上绘制图像所使用的宽度。
================================*/


function convertToGS(img) {
    // 如果浏览器不支持canvas，就返回。
    if (!Modernizr.canvas) return;
    // 存储原始的彩色图像
    img.color = img.src;
    // 创建灰度版图像
    img.grayscale = createGSCanvas(img);
    // 在 mouseover/out 时切换图片
    img.onmouseover = function () {
        this.src = this.color;
    }
    img.onmouseout = function () {
        this.src = this.grayscale;
    }
    img.onmouseout();
}

// 问题：当图片有容器时，图片根据容器大小显示，而canvas绘制的灰度图片是基于原始图片大小的，怎么统一？给canvas加个容器？
function createGSCanvas(img) {
    // 在 canvas 中绘制彩色图片
    var canvas = document.createElement('canvas');
    var elem = document.getElementsByTagName('body')[0].childNodes;
    console.log(elem);
    // canvas 这个节点出现在哪里？不需要 append 吗？？
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(canvas.width, canvas.height);

    // 返回一个环境对象，该对象导出一个二维绘图 API。
    var ctx = canvas.getContext('2d');
    // 第一个参数是绘制对象，后两个是起始点坐标。
    ctx.drawImage(img, 0, 0);
    // 取得原始的图像数据，遍历每一个像素，将每个彩色像素的rgb成分求平均值，得到对应彩色的灰度值。？？？
    // getImageData 只能操作与脚本位于同一个域中的图片。访问本地文件是跨域，需要通过服务器访问。
    var c = ctx.getImageData(0, 0, img.width, img.height);
    // 方法 1
    for (var x = 0; x < c.width * c.height * 4; x += 4) {
    // 方法 2 不懂？？？
    // for (i = 0; i < c.height; i++) {
    //     for (j = 0; j < c.width; j++) {
    //         var x = (i * 4) * c.height + (j * 4);
            var r = c.data[x];
            var g = c.data[x + 1];
            var b = c.data[x + 2];
            // 在rgba表示中，rgb值相同就一定是灰色
            c.data[x] = c.data[x + 1] = c.data[x + 2] = (r + g + b) / 3;
        // }
    }
    // 把灰度数据放回到画布的绘图环境中，并返回原始图像数据作为新灰度图片的源。？？？
    // 重绘区域与原图片重叠，会将原图片覆盖
    ctx.putImageData(c, 0, 0, 0, 0, c.width, c.height);
    // 
    return canvas.toDataURL();
}

var pic = document.getElementById('cover');
Window.onload = convertToGS(pic);


//引用图片
// context.beginPath()
// var image = new Image();
// image.src = "123.jpg";
// image.onload = function () {
//     context.drawImage(image,0,0);
// }
//获取图片信息
// var imageData = context.getImageData(0,0,200,200);