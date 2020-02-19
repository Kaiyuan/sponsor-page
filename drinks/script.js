jQuery(document).ready(function () {

var thisPage = $('body');
var drink_box = $('#donate-box');
var drink_box_s = $('#drinks-box-s');
var icon_donate = $('.icon-donate');
var donate_button = $('.donate-button');
var donate_buttons = $('#drinks-button-box');
var donate_button_bg = $('#drinks-button-bg');
var drinks_qrcodes = $('#drinks-qrcodes');
var drinks_qrcode = $('#drinks-qrcode');
var isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);

var GithubLink  =   "https://github.com/Kaiyuan/donate-page/";
var PayPalLink  =   "https://www.paypal.me/KaiyuanXie";
$('#paypal-donate>a').href = PayPalLink;
$('#github-box>a').href = GithubLink;
var qrcodes = {
    'btc_donate'	:	'../simple/images/BTCQR.png',	// 二维码路径
    'alipay_donate'	:	'../simple/images/AliPayQR.png',	// 支付宝二维码
    'alipay_donate_link'   :   'https://qr.alipay.com/3272611934645308',   // 支付宝二维码上的链接，必须换成自己的连接！！！手机点击会自动跳转到支付宝。
    'wechat_donate'	:	'../simple/images/WeChanSQ.png'
};

var drinks_an = new Object();
// 动画有 4 种状态，不同状态给对应 DOM 添加 css 动画
drinks_an[0] = function(){
    drink_box_s.removeClass('donate-animation-2 donate-animation-3').addClass('donate-animation-1');
    donate_buttons.addClass('showBox');
    setTimeout(() => {
        donate_buttons.removeClass('showBox');
    }, 300);
    // console.log('donate-animation-1');
}
drinks_an[1] = function(){
    drink_box_s.removeClass('donate-animation-1 donate-animation-3').addClass('donate-animation-2');
    setTimeout(() => {
        drink_box_s.removeClass('donate-animation-2');
    }, 300);
    // console.log('donate-animation-2');
}
drinks_an[2] = function(){
    drink_box_s.removeClass('donate-animation-2 donate-animation-1').addClass('donate-animation-3');
    drinks_qrcodes.addClass('showBox');
    setTimeout(() => {
        drinks_qrcodes.removeClass('showBox');
    }, 300);
    // console.log('donate-animation-3');
}
drinks_an[3] = function(){
    drink_box_s.removeClass('donate-animation-3 donate-animation-2').addClass('donate-animation-4');
    setTimeout(() => {
        drink_box_s.removeClass('donate-animation-4');
        drink_box_s.addClass('donate-animation-1');
    }, 300);
    // console.log('donate-animation-4');
}

if (isMobile) {
    donate_buttons.addClass('Mobile');
}

icon_donate.on('click',drinks_an[0]); // drinks 图标点击

donate_button_bg.on('click',drinks_an[1]); // 隐藏 donate box

donate_button.on('click',function(){
    var thisID = $(this).attr("id");
    if (isMobile && thisID === 'alipay_donate') {
        // 当前网页在手机端打开跳转到支付宝 App
        window.open(qrcodes['alipay_donate_link']);
    } else {
        // 当前网页在PC端打开
    drinks_qrcode.css({'background-image' : 'url('+qrcodes[thisID]+')'});
    drinks_an[2]();
    // 显示二维码
    }
});

drinks_qrcode.on('click',drinks_an[3]); // 隐藏二维码
//
})