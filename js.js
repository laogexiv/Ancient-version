document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawGradient() {
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#FFC0CB');
        gradient.addColorStop(1, '#ADD8E6');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function init() {
        resizeCanvas();
        drawGradient();
    }

    window.addEventListener('resize', function () {
        resizeCanvas();
        drawGradient();
    });

    init();

    // 触发按钮和头像的动画效果
    var buttons = document.querySelectorAll('.button');
    var avatar = document.querySelector('.avatar');

    setTimeout(function () {
        avatar.style.opacity = '1';
        avatar.style.transform = 'translateY(0)';
    }, 500);

    buttons.forEach(function (button, index) {
        setTimeout(function () {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 500 + (index + 1) * 100);
    });
});