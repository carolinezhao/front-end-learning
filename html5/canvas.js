// 绘制矢量路径
function draw() {
    var canvas = document.getElementById('draw-in-canvas');
    if (canvas.getContext) {
        // 引用画布的绘图空间 context，二维平面，原点(0,0)在左上角。
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(120.0, 32.0);
        // 只有 lineTo 时，图形为平行四边形。这样的绘制方法有什么优势吗？
        // 右下角
        ctx.bezierCurveTo(120.0, 36.4, 116.4, 40.0, 112.0, 40.0);
        ctx.lineTo(8.0, 40.0);
        // 左下角
        ctx.bezierCurveTo(3.6, 40.0, 0.0, 36.4, 0.0, 32.0);
        ctx.lineTo(0.0, 8.0);
        // 左上角
        ctx.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
        ctx.lineTo(112.0, 0.0);
        // 右上角
        ctx.bezierCurveTo(116.4, 0.0, 120.0, 3.6, 120.0, 8.0);
        ctx.lineTo(120.0, 32.0);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = 'rgb(255,255,255)';
        ctx.stroke();
    }
}
window.onload = draw;