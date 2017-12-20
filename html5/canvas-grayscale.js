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

function createGSCanvas(img) {
    // 在 canvas 中绘制彩色图片
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    // 取得原始的图像数据，遍历每一个像素，将每个彩色像素的rgb成分求平均值，得到对应彩色的灰度值。？？？
    // getImageData 只能操作与脚本位于同一个域中的图片。访问本地文件是跨域，需要通过服务器访问。
    var c = ctx.getImageData(0, 0, img.width, img.height);
    for (i = 0; i < c.height; i++) {
        for (j = 0; j < c.width; j++) {
            var x = (i * 4) * c.height + (j * 4);
            var r = c.data[x];
            var g = c.data[x + 1];
            var b = c.data[x + 2];
            c.data[x] = c.data[x + 1] = c.data[x + 2] = (r + g + b) / 3;
        }
    }
    // 把灰度数据放回到画布的绘图环境中，并返回原始图像数据作为新灰度图片的源。？？？
    ctx.putImageData(c, 0, 0, 0, 0, c.width, c.height);
    return canvas.toDataURL();
}

var pic = document.getElementById('cover');
Window.onload = convertToGS(pic);